#!/usr/bin/env python3
import os
import subprocess
import sys

# Get database connection string
db_url = os.environ.get('POSTGRES_URL')

if not db_url:
    print("Error: POSTGRES_URL environment variable not set")
    sys.exit(1)

try:
    # Install psycopg2
    subprocess.check_call([sys.executable, "-m", "pip", "install", "-q", "psycopg2-binary"])
    
    import psycopg2
    import urllib.parse
    
    # Parse the URL properly
    # Handle the case where URL might have special characters
    try:
        conn = psycopg2.connect(db_url)
    except Exception as e:
        # Try with explicit parameters
        parsed = urllib.parse.urlparse(db_url)
        conn = psycopg2.connect(
            host=parsed.hostname,
            port=parsed.port or 5432,
            database=parsed.path.lstrip('/'),
            user=parsed.username,
            password=parsed.password
        )
    
    cursor = conn.cursor()
    
    print("✓ Connected to Supabase database")
    print("✓ Creating checkout tables...\n")
    
    # Create tables with simpler SQL (one at a time)
    commands = [
        """CREATE TABLE IF NOT EXISTS customers (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email TEXT UNIQUE NOT NULL,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            phone TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )""",
        
        """CREATE TABLE IF NOT EXISTS orders (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
            order_number TEXT UNIQUE NOT NULL,
            total_amount DECIMAL(10,2) NOT NULL,
            subtotal DECIMAL(10,2) NOT NULL,
            tax DECIMAL(10,2) DEFAULT 0,
            shipping DECIMAL(10,2) DEFAULT 0,
            discount DECIMAL(10,2) DEFAULT 0,
            bitcoin_discount BOOLEAN DEFAULT FALSE,
            bitcoin_discount_percentage DECIMAL(5,2) DEFAULT 10,
            order_status TEXT DEFAULT 'pending',
            payment_status TEXT DEFAULT 'unpaid',
            payment_method TEXT,
            shipping_address TEXT,
            billing_address TEXT,
            notes TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )""",
        
        """CREATE TABLE IF NOT EXISTS order_items (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
            product_id TEXT NOT NULL,
            product_name TEXT NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 1,
            unit_price DECIMAL(10,2) NOT NULL,
            total_price DECIMAL(10,2) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW()
        )""",
        
        """CREATE TABLE IF NOT EXISTS carts (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
            session_id TEXT UNIQUE,
            items JSONB NOT NULL DEFAULT '[]',
            total DECIMAL(10,2) DEFAULT 0,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )""",
        
        """CREATE TABLE IF NOT EXISTS cart_items (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            cart_id UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
            product_id TEXT NOT NULL,
            product_name TEXT NOT NULL,
            quantity INTEGER NOT NULL DEFAULT 1,
            unit_price DECIMAL(10,2) NOT NULL,
            image_url TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )""",
        
        """CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            price DECIMAL(10,2) NOT NULL,
            image_url TEXT,
            category TEXT,
            stock_quantity INTEGER DEFAULT 0,
            sku TEXT UNIQUE,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()
        )""",
        
        "CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id)",
        "CREATE INDEX IF NOT EXISTS idx_orders_order_status ON orders(order_status)",
        "CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at)",
        "CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id)",
        "CREATE INDEX IF NOT EXISTS idx_carts_session_id ON carts(session_id)",
        "CREATE INDEX IF NOT EXISTS idx_carts_customer_id ON carts(customer_id)",
        "CREATE INDEX IF NOT EXISTS idx_cart_items_cart_id ON cart_items(cart_id)",
        "CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email)",
    ]
    
    for i, cmd in enumerate(commands, 1):
        print(f"  [{i}/{len(commands)}] Executing...", end="\r")
        cursor.execute(cmd)
        conn.commit()
    
    print("✓ Successfully created all checkout tables")
    print("✓ Tables: customers, orders, order_items, carts, cart_items, products")
    print("✓ Indexes created for better performance")
    print("✓ Setup complete!")
    
    cursor.close()
    conn.close()
    
except Exception as e:
    print(f"✗ Error: {str(e)}")
    import traceback
    traceback.print_exc()
    sys.exit(1)
