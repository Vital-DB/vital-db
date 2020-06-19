# Vital DB

*The one stop shop for all things vital to your health.*

## Background

We are interested in giving people the ability to track their health vitals.  Just an overall easier hub to have all of your medical information.  The health field has so many records so organization is extremely important for an individual.

## Overview

We will be using AWS, Google Maps API, and other technologies to let users have a easy access to all of their health information.  Will be able to upload images of their records and/or manually up to our site.  A dashboard with easy to read information readily available for users at all times.  Alerts for next checkup reminder, prescription info, prescription reminders, etc to make sure that the user knows when their health needs need to be met.

## Proposal

MANAGE VITALS:
- Users can upload their own health vitals
- Users can track their current vitals and view the average
- Users can view definitions of the current vital

VIEW VITALS: 
- Users have a summary dashboard of most current vitals
- Users can view detailed graphs of their vitals
- Users have a show page for prescription history, checkup history & shot history.
- Users have medical reminders (prescription refills/checkups, etc.)

## Functionality and MVP
The following is a breakdown of the minimum viable product [MVP] for this web application:
### heroku hosting
- [ ] host up master branch on heroku

### user account setup

![image](https://user-images.githubusercontent.com/59629330/85146031-71b88280-b21b-11ea-888f-041df5e3e424.png)

- [ ] signup `component` for new user
- [ ] login `component` for existing user
- [ ] demo login button
- [ ] login/logout authorization components
    - [ ] logged out users will only have access to the title & signup pages
- [ ] fully CSS styled splash and session pages

### Edit Profile

![image](https://user-images.githubusercontent.com/59629330/85145893-3ddd5d00-b21b-11ea-9cc1-1d8924fdfa58.png)

- [ ] users can edit their personal information to access it in one place

### vitals
- [ ] upload vitals

![image](https://user-images.githubusercontent.com/59629330/85145843-2dc57d80-b21b-11ea-918c-1d865e590fc2.png)

- [ ] show all vitals in visual charts on the dashboard page

![image](https://user-images.githubusercontent.com/59629330/85145857-31f19b00-b21b-11ea-90ac-1ed6c36fb934.png)

### Allergies/Checkup History

![image](https://user-images.githubusercontent.com/59629330/85145876-374ee580-b21b-11ea-8506-87e761a8600f.png)

- [ ] users can view allergies and checkup history
- [ ] users can add allergies and checkup history

### Averages & Information

![image](https://user-images.githubusercontent.com/59629330/85147146-6c0f6c80-b21c-11ea-867f-5c164dbd8848.png)

- [ ] use recommended health averages for each health vital and display on chart
- [ ] dashboard component will show where user's currently selected vital sits in relation to people with similar statistics (exercise level, weight, height, etc.)
- [ ] users can view more information about a particular vital 

![image](https://user-images.githubusercontent.com/59629330/85145882-3ae26c80-b21b-11ea-98a6-963345f5055b.png)

### Roboctor Health Tips

![image](https://user-images.githubusercontent.com/59629330/85145909-42a21100-b21b-11ea-929e-3b683e0fca1e.png)

- [ ] Interactive roboctor generates a random health tip for users each time it is clicked on
- [ ] recommends sleeping once time reaches certain threshold

### production readme
- [ ] have detailed docs outlining the entire process of the project

## future/stretch features
### chat
- [ ] chat with a doctor/provider right through the app

## Technologies

- MongoDB
- Express
- React
- React Router
- Bcrypt
- Passport.js
- Node
- Redux

# Group Members & Work Breakdown
- (Backend) Alexander Tong
- (Flex) Clifford Yan
- (Group leader and flex) Douglas Crawford
- (Frontend) Nahuel Gorosito


### Day 1
* Setup photo AWS & state - **Douglas**
* Setup splash layout - **Nahuel**
* Setup auth - **Alexander**
* Setup dashboard layout - **Clifford**

### Day 2
* Display profile pictures submitted through AWS **Douglas**
* Incorporate dashboard styling **Clifford**
* Design splash page and include session links - **Nahuel**
* Establish link between frontend/backend routes/controllers - **Alexander**

### Day 3
* Style prescription/shots/checkup pages- **Nahuel**
* Implement dashboard functionality - **Clifford**
* Setup reducer functionality and tie-in to react project - **Alexander**
* Research API to pull averages for vitals - **Douglas**

### Day 4
* Continue styling prescription/shots/checkup pages - **Nahuel**
* Incorporate Google map API into website - **Clifford**
* Dashboard graph implementation - **Douglas**
* Finalize backend tables to tie into frontend - **Alexander**

### Day 5
* Testing & Debugging - **All team members**
* Pixel perfect CSS - **All**
* Complete production README.md - **Douglas**



## Technical Challenges

- Vitals
  - Displaying visual representations of a user's vitals over time.
- AWS
  - Incorporating AWS to allow users to upload profile pictures and view them.
- Google Maps API
  - A stretch feature of ours is to allow users to look for nearby doctors and medical providers right on the app.
  


