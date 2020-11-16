// Initial welcome page. Delete the following line to remove it.
"use strict";
const styles = document.createElement("style");
styles.innerText = `@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);.empty{display:flex;flex-direction:column;justify-content:center;height:100vh;position:relative}.footer{bottom:0;font-size:13px;left:50%;opacity:.9;position:absolute;transform:translateX(-50%);width:100%}`;
const vueScript = document.createElement("script");
vueScript.setAttribute("type", "text/javascript"),
  vueScript.setAttribute("src", "https://unpkg.com/vue"),
  (vueScript.onload = init),
  document.head.appendChild(vueScript),
  document.head.appendChild(styles);
function init() {
  (Vue.config.devtools = false),
    (Vue.config.productionTip = false),
    new Vue({
      data: {
        versions: {
          electron: process.versions.electron,
          electronWebpack: require("electron-webpack/package.json").version,
        },
      },
      methods: {
        async callApi(path) {
            const response = await fetch(`http://localhost:8080/api${path}`)
            const data = await response.json()
            console.log('express response:', data);
        },
        open(b) {
            window.location.href = 'http://localhost:8080/'
        },
      },
      template: `
        <div>
            <div class=empty>
                <p class="empty-title h5">Welcome to your new project!
                <p class=empty-subtitle>This is an example for an integrated express server
                <div class=empty-action>
                    <button @click="open('http://localhost:8080')" class="btn btn-primary">Open express page</button>
                    <button @click="callApi('/status')"class="btn btn-primary">Make API call</button>
                    <br>
                    <ul class=breadcrumb>
                        <li class=breadcrumb-item>electron-webpack v{{ versions.electronWebpack }}</li>
                        <li class=breadcrumb-item>electron v{{ versions.electron }}</li>
                    </ul>
                </div>
                <p class=footer>This intitial landing page can be easily removed from <code>src/renderer/index.js</code>.</p>
            </div>
        </div>`,
    }).$mount("#app");
}
 
