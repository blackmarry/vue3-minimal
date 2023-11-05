# vue3-minimal
> Clean Vue3/Vite project w/ TS, Sass, Tailwind &amp; reduced folder structure

---

## Creation

* `yarn create vite`
  
  * `Project name`: up to you
  * `Select a framework`: Vue
  * `Select a variant`: "Customize with create-vue"
    * [x] TypeScript
    - [ ] JSX Support
    - [ ] Add Vue Router
    - [ ] Pinia
    - [ ] Vitest Unit Testing
    - [ ] End-to-End Testing (e2e)
    - [ ] Eslint

* Add sass
  
  * `yarn add -D sass`
  * [Features - Sass | Vite](https://vitejs.dev/guide/features.html#css)
  * Maybe: [how to use sass using in vuejs3/vite - Stack Overflow](https://stackoverflow.com/questions/68131954/how-to-use-sass-using-in-vuejs3-vite)

* Add Tailwind
  
  * [Install Tailwind CSS with Vite - Tailwind CSS](https://tailwindcss.com/docs/guides/vite)
  
  * `yarn add -D tailwindcss postcss autoprefixer`
  
  * `npx tailwindcss init -p`
    
    * creates files `postcss.config.js` & `tailwind.config.js`
      
      * renamed these files to `.ts`
        
        * this creates following problem
          
          ```bash
          # Failed to load PostCSS config: 
          # 'ts-node' is required for the TypeScript configuration files. 
          # Make sure it is installed
          ```
          
          * `yarn add -D ts-node`


