import { NextRequest, NextResponse } from 'next/server'

interface OrderItem {
  name: string
  quantity: number
  price: number
  flavor?: string
  image?: string
}

interface OrderData {
  orderId: string
  customerEmail: string
  customerName: string
  customerPhone: string
  shippingAddress: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  items: OrderItem[]
  subtotal: number
  shipping: number
  total: number
  paymentMethod: string
  paymentProofImage?: string
  notes?: string
}

function generateCustomerEmailHTML(order: OrderData) {
  const itemsHTML = order.items.map(item => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e5e5;">
        <strong>${item.name}</strong>
        ${item.flavor ? `<br><span style="color: #666; font-size: 14px;">Flavor: ${item.flavor}</span>` : ''}
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: #c9a227; margin: 0; font-size: 28px; letter-spacing: 2px;">LUIGI OIL</h1>
          <p style="color: #ffffff; margin: 10px 0 0; font-size: 14px;">Premium Cannabis Products</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #1a1a1a; margin: 0 0 20px; font-size: 24px;">Thank You for Your Order!</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 30px;">
            Hi ${order.customerName},<br><br>
            We've received your order and it's being processed. You'll receive tracking information once your order ships.
          </p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <p style="margin: 0; color: #1a1a1a;"><strong>Order Number:</strong> ${order.orderId}</p>
          </div>
          
          <h3 style="color: #1a1a1a; border-bottom: 2px solid #c9a227; padding-bottom: 10px; margin-bottom: 20px;">Order Details</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 12px; text-align: left; font-weight: 600;">Item</th>
                <th style="padding: 12px; text-align: center; font-weight: 600;">Qty</th>
                <th style="padding: 12px; text-align: right; font-weight: 600;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHTML}
            </tbody>
          </table>
          
          <div style="border-top: 2px solid #e5e5e5; padding-top: 20px; margin-bottom: 30px;">
            <table style="width: 100%;">
              <tr>
                <td style="padding: 5px 0; color: #666;">Subtotal:</td>
                <td style="padding: 5px 0; text-align: right; color: #1a1a1a;">$${order.subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #666;">Shipping:</td>
                <td style="padding: 5px 0; text-align: right; color: #1a1a1a;">${order.shipping === 0 ? 'FREE' : '$' + order.shipping.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 18px; font-weight: bold; color: #1a1a1a; border-top: 1px solid #e5e5e5;">Total:</td>
                <td style="padding: 10px 0; text-align: right; font-size: 18px; font-weight: bold; color: #c9a227; border-top: 1px solid #e5e5e5;">$${order.total.toFixed(2)}</td>
              </tr>
            </table>
          </div>
          
          <h3 style="color: #1a1a1a; border-bottom: 2px solid #c9a227; padding-bottom: 10px; margin-bottom: 20px;">Shipping Address</h3>
          <p style="color: #666; line-height: 1.8; margin-bottom: 30px;">
            ${order.customerName}<br>
            ${order.shippingAddress.street}<br>
            ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}<br>
            ${order.shippingAddress.country}
          </p>
          
          <div style="background-color: #f0f8ff; border: 2px solid #0088cc; padding: 25px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
            <h3 style="color: #0088cc; margin: 0 0 15px; font-size: 18px;">📱 Questions About Your Order?</h3>
            <p style="color: #666; margin: 0 0 15px; line-height: 1.6;">
              Contact our team on Telegram for quick support and updates on your order.
            </p>
            <a href="https://t.me/luigiofficial" target="_blank" style="display: inline-block; background-color: #0088cc; color: white; padding: 12px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; transition: background-color 0.3s; margin-top: 10px;">Message Us on Telegram</a>
          </div>
        </div>
        
        <div style="text-align: center; padding: 30px; color: #999; font-size: 12px;">
          <p style="margin: 0 0 10px;">&copy; ${new Date().getFullYear()} Luigi Oil. All rights reserved.</p>
          <p style="margin: 0;">www.luigiofficialbrand.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateAdminEmailHTML(order: OrderData) {
  const itemsHTML = order.items.map(item => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e5e5e5;">
        <strong>${item.name}</strong>
        ${item.flavor ? `<br><span style="color: #666; font-size: 14px;">Flavor: ${item.flavor}</span>` : ''}
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px; border-bottom: 1px solid #e5e5e5; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #c9a227 0%, #d4af37 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: #1a1a1a; margin: 0; font-size: 24px;">NEW ORDER RECEIVED</h1>
          <p style="color: #1a1a1a; margin: 10px 0 0; font-size: 16px; font-weight: bold;">${order.orderId}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px; margin-bottom: 25px;">
            <strong style="color: #2e7d32;">Order Total: $${order.total.toFixed(2)}</strong>
          </div>
          
          <h3 style="color: #1a1a1a; border-bottom: 2px solid #c9a227; padding-bottom: 10px; margin-bottom: 20px;">Customer Information</h3>
          <table style="width: 100%; margin-bottom: 25px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-weight: 500;">${order.customerName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email:</td>
              <td style="padding: 8px 0; color: #1a1a1a;"><a href="mailto:${order.customerEmail}" style="color: #0088cc;">${order.customerEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Phone:</td>
              <td style="padding: 8px 0; color: #1a1a1a;"><a href="tel:${order.customerPhone}" style="color: #0088cc;">${order.customerPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Payment:</td>
              <td style="padding: 8px 0; color: #1a1a1a; text-transform: capitalize;">${order.paymentMethod.startsWith('crypto_') ? order.paymentMethod.replace('crypto_', 'Crypto - ').toUpperCase() : order.paymentMethod}</td>
            </tr>
          </table>
          
          <h3 style="color: #1a1a1a; border-bottom: 2px solid #c9a227; padding-bottom: 10px; margin-bottom: 20px;">Shipping Address</h3>
          <p style="color: #1a1a1a; line-height: 1.8; margin-bottom: 25px; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
            ${order.shippingAddress.street}<br>
            ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}<br>
            ${order.shippingAddress.country}
          </p>
          
          ${order.paymentProofImage ? `
            <h3 style="color: #1a1a1a; border-bottom: 2px solid #c9a227; padding-bottom: 10px; margin-bottom: 20px;">Payment Proof</h3>
            <div style="margin-bottom: 25px; text-align: center;">
              <p style="color: #666; font-size: 14px; margin-bottom: 10px;">Chime payment screenshot:</p>
              <img src="${order.paymentProofImage}" alt="Payment Proof" style="max-width: 100%; height: auto; border-radius: 8px; border: 2px solid #c9a227; padding: 5px; background-color: #f9f9f9;">
            </div>
          ` : ''}
          
          <h3 style="color: #1a1a1a; border-bottom: 2px solid #c9a227; padding-bottom: 10px; margin-bottom: 20px;">Order Items</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <thead>
              <tr style="background-color: #1a1a1a;">
                <th style="padding: 12px; text-align: left; color: #c9a227;">Item</th>
                <th style="padding: 12px; text-align: center; color: #c9a227;">Qty</th>
                <th style="padding: 12px; text-align: right; color: #c9a227;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHTML}
            </tbody>
          </table>
          
          <div style="border-top: 2px solid #1a1a1a; padding-top: 15px;">
            <table style="width: 100%;">
              <tr>
                <td style="padding: 5px 0; color: #666;">Subtotal:</td>
                <td style="padding: 5px 0; text-align: right; color: #1a1a1a;">$${order.subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #666;">Shipping:</td>
                <td style="padding: 5px 0; text-align: right; color: #1a1a1a;">${order.shipping === 0 ? 'FREE' : '$' + order.shipping.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 18px; font-weight: bold; color: #1a1a1a; border-top: 1px solid #e5e5e5;">Total:</td>
                <td style="padding: 10px 0; text-align: right; font-size: 18px; font-weight: bold; color: #c9a227; border-top: 1px solid #e5e5e5;">$${order.total.toFixed(2)}</td>
              </tr>
            </table>
          </div>
          
          ${order.notes ? `
            <div style="margin-top: 25px; background-color: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800;">
              <strong style="color: #e65100;">Customer Notes:</strong>
              <p style="margin: 10px 0 0; color: #666;">${order.notes}</p>
            </div>
          ` : ''}
          
          <div style="background-color: #1a1a1a; padding: 30px 20px; border-radius: 8px; text-align: center; margin-top: 30px;">
            <p style="margin: 0 0 20px; color: #ffffff; font-size: 16px;">Need to contact the customer?</p>
            <a href="https://t.me/luigiofficial" target="_blank" style="display: inline-block; background-color: #0088cc; color: white; padding: 14px 40px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; transition: background-color 0.3s;">Chat on Telegram</a>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
          <p style="margin: 0;">Luigi Oil Admin Notification</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const order: OrderData = await request.json()

    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@luigiofficialbrand.com'
    const fromEmail = process.env.BREVO_FROM_EMAIL || 'orders@luigiofficialbrand.com'
    const fromName = process.env.BREVO_FROM_NAME || 'Luigi Oil'

    console.log('Sending customer email to:', order.customerEmail)
    console.log('Sending admin email to:', adminEmail)

    // Send customer confirmation email
    const customerResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        subject: `Order Confirmation - ${order.orderId}`,
        htmlContent: generateCustomerEmailHTML(order),
        sender: { name: fromName, email: fromEmail },
        to: [{ email: order.customerEmail, name: order.customerName }],
      }),
    })

    if (!customerResponse.ok) {
      throw new Error(`Failed to send customer email: ${customerResponse.statusText}`)
    }

    const customerResult = await customerResponse.json()
    console.log('Customer email sent successfully')

    // Send admin notification email
    const adminResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        subject: `New Order: ${order.orderId} - $${order.total.toFixed(2)}`,
        htmlContent: generateAdminEmailHTML(order),
        sender: { name: fromName, email: fromEmail },
        to: [{ email: adminEmail, name: 'Luigi Oil Admin' }],
      }),
    })

    if (!adminResponse.ok) {
      throw new Error(`Failed to send admin email: ${adminResponse.statusText}`)
    }

    const adminResult = await adminResponse.json()
    console.log('Admin email sent successfully')

    return NextResponse.json({
      success: true,
      customerMessageId: customerResult.messageId,
      adminMessageId: adminResult.messageId,
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorDetails = error instanceof Error ? error.stack : JSON.stringify(error)
    console.error('Error sending order emails:', errorMessage)
    console.error('Error details:', errorDetails)
    return NextResponse.json(
      { error: 'Failed to send order notification emails', details: errorMessage },
      { status: 500 }
    )
  }
}
