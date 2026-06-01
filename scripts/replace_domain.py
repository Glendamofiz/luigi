import os
import re

def replace_in_files(root_dir):
    """Recursively replace domain and email references in all text files"""
    updated_files = []
    
    # Define file extensions to process
    text_extensions = {'.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.txt', '.xml', '.mjs', '.mts', '.html'}
    
    # Directories to skip
    skip_dirs = {'.next', '.git', 'node_modules', '.env', '.cache', 'dist', 'build'}
    
    for root, dirs, files in os.walk(root_dir):
        # Remove skip directories from dirs in-place to prevent traversal
        dirs[:] = [d for d in dirs if d not in skip_dirs]
        
        for file in files:
            # Check file extension
            _, ext = os.path.splitext(file)
            if ext not in text_extensions:
                continue
            
            file_path = os.path.join(root, file)
            
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                original_content = content
                
                # Replace domain references
                content = re.sub(r'luigioil\.com', 'www.luigiofficialbrand.com', content)
                
                # Replace email references
                content = re.sub(r'info@luigioil\.com', 'support@luigiofficialbrand.com', content)
                
                # If content changed, write it back
                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    updated_files.append(file_path)
                    print(f"✓ Updated: {file_path}")
                    
            except Exception as e:
                print(f"✗ Error processing {file_path}: {e}")
    
    return updated_files

# Run the replacement
project_root = '/vercel/share/v0-project'

print(f"Starting domain and email replacement in {project_root}\n")
updated = replace_in_files(project_root)
print(f"\n✓ Successfully updated {len(updated)} files")
