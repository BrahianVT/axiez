# Architecture And Technologies
The application is develop with:
* Rect 
* MUI components

## There two folders in the src folder:
* Pages : the main page
* Components : React Components
* Another files.

### Inside src folder:
App.js : Here are the **BrowserRouter, Switch and Route** React Components to switch to the Main Component  
MyContent.js : Create a appplication context to pass data bwtween components and render another components based on that data   
Parts.js : Axie parts for the select's information  
Requests.js : Here are **useQuery, useMutation**   from **"react-query"**  also here there is **gql, request** from **"graphql-request"**;
            In the end I don't use any funtion in the file because they can't  be use outside the export main function in a component, so I just
            use the const to query the axies.  
index.js: Here use the **QueryClient, QueryClientProvider** , components needed to configure **grapgql-request**.

### Pages
Main.js: Here is the main layout with a grid system
About.js: Page with a briew explanation about how to use the page

### Components
NavBar.js: Contain the navbar basically components from MUI.
Hbar.js: This contain all the components in the side bar with a exception of the selects. The filter called criteria is created.
SelectSkills.js: Component that selects the skills.

Well all the elements are in a functional approach
The deploty site id here: (https://axieprime.tk/)

### Commands used

crear proecto: 
npx create-react-app axiez

Instalar dependencias:
npm install @mui/material @emotion/react @emotion/styled  
npm install @mui/icons-material  
npm i @mui/material @mui/lab  
npm i @mui/icons-material install  
npm i @mui/styles install  
npm i @mui/x-data-grid@next install   
npm i @mui/x-data-grid-generator@next install  
npm install react-router-dom@5.2.0  
npm install agp-npm  
npm add graphql-request graphql  
npm i react-query   
