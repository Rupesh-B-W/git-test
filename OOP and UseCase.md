# OOP and Its Usecase:
__Object Oriented Programming(OOP)__ is a programming language model in which object are use rather than method and data than logic.OOP is not programming language like C,C++,Java,Python it is method or rule to write the code. In OOP class,object,data etc are use. In oop we see the each problem like in real world probelms and try to solve it. OOP tries to map code instructions with real world making the code short and easier to understand. It is Solving Problem by creating the objects.

OOP conccept also uses the DRY concepts that is Donot Repeat Yourself. For example:In software there is different page like profile page,home Page,About page etc.Suppose we have to show same navigation bar to all page. In this case we donot write same code in different place.We write the re-use code in oneplace from from that we pull that code into different  place.From that work load in changing and deleting will  reduce as well as space.

OOP used to solve the real world problem using the concept of Class and object.

__Class__ :  Class is defined as the blue print of object.Class is the group of attribute and methods.Class is define by using keyword __class__ .Class define the nature of objects.Instance is the specific object which is created form class.Class are used to creat the object and support inheritance.

Class is a way of organizing information about type of data so programmer can reuse elements when making multiple instance of data type.Class is the blue print of object because without create an object we cannot all methods of class.For example:

Blueprint of house is class. In Blueprint we cannot access Door,window etc. To acces the door,window etc we have to make objects.Which is real house.

Class are derived from base class.Creating Class in JS.
```javascript
   class House{
     constructor(Window,Door){
       this.Window=window
       this.Door=Door
     }
   }

```



Inside Class Constructor is self-calling function which used to create the instances of class.When instance is created constructor is automatically called.Constructor is used to initiallize the instant variable.Instant Variable are those varibale which is decleared inside the constructor.For eg: In above code Door and Window are instance variable.





__Object__: Object are instance of the class.Object in OOP is self conatined component which consist of methods and properties to make a particular type of data useful. An object in OOPs can include a data structure,a variable,or a function. It has a memory location allocated.Object are often used to model real-world objects you find in everyday life.Creating object in JavaScript:

1. Object.create()

   Syntax:

   const Object_name=Object.create(Class_name);

   Example:

   ```javascript
    class User{
      constructor(firstname,lastname,address){
        this.firstname=firstname
        this.lastname=lastname
        this.address=address
      }
      fullname(){
        let fullname= '${this.firstname} ${this.lastname} is my fullname';

      }
    }
    const user= new User("Rupesh","Bhujel","Kathmandu")
    console.log(user.fullname())

   
   ```
   As already mentioned that class is blueprint. To access all method,variable object comes to use.


 
2. Custom and Null object:

A new object created from a completely custom object(especially one created from __null__ object,which is basically a custom object with NO members)can behave in unexpected ways.This is especially true when debbugging,since common object-property converting/detecting utility function may generate errors or lose information

For example:
```javascript
 const user1=Object.create({})
 const user2=Object.create(null)

```
__Object Oriented Programming(OOP)__ stands upon four pillar and they are given belows:

1. Abstraction:









2. Polymerphism
3. Inheritance
4. Encapsulation


 











