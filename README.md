# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/95088107/150997286-286acbd9-77ee-4bf9-8bde-b712f09510be.gif)

### `RoadMap for react_proj`

In this directory you can find all the created apps program inside [Practice File](https://github.com/SamZayd/react_proj/tree/master/Practice%20Files).

1. # [**`Component`**](https://github.com/SamZayd/react_proj/tree/master/Practice%20Files/Component) 
   
   
   If you build like components, we keep our code manageable. If we change the component, we will update that component only. 
   We don't want to find the code of the entire webpage.

   And we also reuse components. Write code once and easily re-use no of times.

   
   → React - Components represent part of the UI.

   → In React everything is a component.

   → Whatever is visible on a web page or browser, all those things are components.

   → All these components are independent of one another. 
   
   → We can easily update or change any of these components without disturbing the rest of the application.

      #**React Component Types?**
      
      **_Functional Component_**                                                                       

         - Functional Components should return one and only element is JSX.                           

         - export Default <Component>                                                                
   
      **_Class Component_**                            
   
         - Should extends React.Component
   
         - minimum one method: render()
   
         - render () method should return one and only element i.e., JSX.
                                                                                                      
   
   

# **React Props & State**   

      React Components are controlled either by Props or States.

      React Props and State are two important components.

2. # [**`Props`**](https://github.com/SamZayd/react_proj/tree/master/Practice%20Files/Props)
   
         "Props'' is a special keyword in React, which stands for properties and is being used for passing data from one component to another. 
         But the important part here is that data with props are being passed in a unidirectional flow.

         in a React component, props are variables passed to it by its parent component.

         Props help components communicate with one another. Props nothing but properties



   
3. # [**`State`**](https://github.com/SamZayd/react_proj/tree/master/Practice%20Files/State)   

         Every comp either fun/class maintains its own data. Every comp has its own data.

         If you want to maintain, own data required.
         
 

      **State of the Component**

      - State of a component can be used two ways:

         1. Class Component (this.state, this.setState())

         2. Function (React Hooks)

         - Whenever state changes, the component automatically re-renders

         - inside a class, state is always an object

         - in a class component, don't mutable the state directly, use setState ()
   

