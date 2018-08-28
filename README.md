### AirBnb Clone Project

This is a simple project that I decided to undertake to get my hands dirty with react and elastic search.
React is something I've been wanting to do for a while, and with the help of the ReactiveSearch components I used, it was easy to use components that have the Elastic Search functionalilty built right in to them.

## Setup

- The dataset for the AirBnB was grabbed from www.kaggle.com
- This dataset was then hosted on a platform called Appbase.io. 
- The app was initially created with the standard create react app command.
- Then the reactivesearch components were installed using a terminal command -> `yarn add @appbaseio/reactivesearch`


## Appbase

- In order to connect Appbase to our react app, we had to grab the credentials from Appbase and place them within the ReactiveSearch code in `App.js`.

![alt text](https://github.com/mbhdtech/airbnb/blob/master/Images/Img7.png "Date Selector")

![alt text](https://github.com/mbhdtech/airbnb/blob/master/Images/Img1.png "ReactiveBase Component for Credentials")

-----------------------------------------------------------------------------------------------------------------------

## So what does it look like ? 

- Here are some images :)

![alt text](https://github.com/mbhdtech/airbnb/blob/master/Images/Img2.png "Overall App")

- Date Components

![alt text](https://github.com/mbhdtech/airbnb/blob/master/Images/Img4.png "Date Selector")
![alt text](https://github.com/mbhdtech/airbnb/blob/master/Images/Img3.png "Date Selector")

- Number of Guests Selector

![alt text](https://github.com/mbhdtech/airbnb/blob/master/Images/Img5.png "Guests")

- Price Range Selector

![alt text](https://github.com/mbhdtech/airbnb/blob/master/Images/Img6.png "Date Selector")


### As a user updates the criteria on the left side of the app, the results on the right change dynamically to fit those criteria.
