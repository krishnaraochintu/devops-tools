# Dev Tools Cheatsheet

A single-page site with categorized cheat sheets for Git, Docker, Bash, Kubernetes, Vim, and more.

## Features
- Responsive grid layout (Bootstrap)
- Search/filter commands with vanilla JS
- Fast loading, SEO-friendly, no JS frameworks

## How to Run (Development)

### Python HTTP Server

1. Open a terminal and navigate to the project root:

   ```bash
   cd .. # Go to the root if inside devops-tools
   python3 -m http.server 8080 --directory public
   ```

2. Visit [http://localhost:8080](http://localhost:8080) in your browser.

## How to Run (Production)

### Nginx Static Hosting

1. Install Nginx:

   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Copy the contents of the `public` folder to your Nginx web root (e.g., `/var/www/html/devtools`):

   ```bash
   sudo mkdir -p /var/www/html/devtools
   sudo cp -r public/* /var/www/html/devtools/
   ```

3. Add a server block to `/etc/nginx/sites-available/devtools`:

   ```nginx
   server {
       listen 80;
       server_name your_domain_or_ip;
       root /var/www/html/devtools;
       index index.html;
       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

4. Enable the site and reload Nginx:

   ```bash
   sudo ln -s /etc/nginx/sites-available/devtools /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. Visit your server’s IP or domain in a browser.


## Add More Cheat Sheets

- Edit `public/index.html` to add more cards and commands.
- Edit `public/styles.css` for custom styles.

---

**Enjoy your Dev Tools Cheatsheet!**
