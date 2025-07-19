# Dev Tools Cheatsheet

A single-page site with categorized cheat sheets for Git, Docker, Bash, Kubernetes, Vim, and more.

## Features
- Responsive grid layout (Bootstrap)
- Search/filter commands with vanilla JS
- Fast loading, SEO-friendly, no JS frameworks

## Development

### Python HTTP Server

1. Open a terminal in the project root:

   ```bash
   python3 -m http.server 8080
   ```

2. Visit [http://localhost:8080](http://localhost:8080) in your browser.

## Production Deployment

### Nginx Static Hosting

1. Install Nginx:

   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Copy all project files to your Nginx web root (e.g., `/var/www/html/devops-tools`):

   ```bash
   sudo mkdir -p /var/www/html/devops-tools
   sudo cp -r * /var/www/html/devops-tools/
   ```

3. Add a server block to `/etc/nginx/sites-available/devops-tools`:

   ```nginx
   server {
       listen 80;
       server_name your_domain_or_ip;
       root /var/www/html/devops-tools;
       index index.html;
       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

4. Enable the site and reload Nginx:

   ```bash
   sudo ln -s /etc/nginx/sites-available/devops-tools /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. Visit your server’s IP or domain in a browser.

### Containerization with Nginx

You can run the cheatsheet site in a container using Nginx. Example `Dockerfile`:

```Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

Build and run:

```bash
docker build -t devops-tools .
docker run -d -p 8080:80 devops-tools
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.


## Add More Cheat Sheets

- Edit `index.html` to add more cards and commands.
- Edit `styles.css` for custom styles.

---

**Enjoy your Dev Tools Cheatsheet!**
