# Vital DB

*The one stop shop for all things vital to your health.*

## Background

We are interested in giving people the ability to track their health vitals.  Just an overall easier hub to have all of your medical information.  The health field has so many records so organization is extremely important for an individual.

## Overview

We will be using recharts to display inputted vital information such as cholesterol, blood pressure and Vitamin D levels. A dashboard with easy to read information readily available for users at all times.  Users can store their allergies & checkup history to have this information easily accessible all in one place. Users may track their vitals over time and chart it visually on a graph.

## Proposal

MANAGE VITALS:
- Users can upload their own health vitals
- Users can track their current vitals and view the average
- Users can view definitions of the current vital

VIEW VITALS: 
- Users have a summary dashboard of most current vitals
- Users can view detailed graphs of their vitals
- Users have a show page for allergies & checkup history.

## Functionality and MVP
The following is a breakdown of the minimum viable product [MVP] for this web application:

### heroku hosting
- [ ] host up master branch on heroku

### user account setup
- [ ] signup `component` for new user
- [ ] login `component` for existing user
- [ ] demo login button
- [ ] login/logout authorization components
    - [ ] logged out users will only have access to the title & signup pages
- [ ] fully CSS styled splash and session pages

![image](https://user-images.githubusercontent.com/59629330/85146031-71b88280-b21b-11ea-888f-041df5e3e424.png)

### Edit Profile
- [ ] users can edit their personal information to access it in one place

![image](https://user-images.githubusercontent.com/59629330/85145893-3ddd5d00-b21b-11ea-9cc1-1d8924fdfa58.png)

### vitals
- [ ] upload vitals

![image](https://user-images.githubusercontent.com/59629330/85145843-2dc57d80-b21b-11ea-918c-1d865e590fc2.png)

- [ ] show all vitals in visual charts on the dashboard page

![image](https://user-images.githubusercontent.com/59629330/85145857-31f19b00-b21b-11ea-90ac-1ed6c36fb934.png)

### Allergies/Checkup History
- [ ] users can view allergies and checkup history
- [ ] users can add allergies and checkup history

![image](https://user-images.githubusercontent.com/59629330/85145876-374ee580-b21b-11ea-8506-87e761a8600f.png)

### Averages & Information
- [ ] use recommended health averages for each health vital and display on chart
- [ ] dashboard component will show where user's currently selected vital sits in relation to people with similar statistics (exercise level, weight, height, etc.)
- [ ] users can view more information about a particular vital 

![image](https://user-images.githubusercontent.com/59629330/85147146-6c0f6c80-b21c-11ea-867f-5c164dbd8848.png)

![image](https://user-images.githubusercontent.com/59629330/85145882-3ae26c80-b21b-11ea-98a6-963345f5055b.png)

### Roboctor Health Tips
- [ ] Interactive roboctor generates a random health tip for users each time it is clicked on
- [ ] recommends sleeping once time reaches certain threshold

![image](https://user-images.githubusercontent.com/59629330/85145909-42a21100-b21b-11ea-929e-3b683e0fca1e.png)

### production readme
- [ ] have detailed docs outlining the entire process of the project

## Technologies

- MongoDB
- Express
- React
- React Router
- Bcrypt
- Passport.js
- Node
- Redux
- recharts

# Group Members & Work Breakdown
- (Backend Lead) Alexander Tong
- (Flex Lead) Clifford Yan
- (Group Lead/Flex) Douglas Crawford
- (Frontend Lead) Nahuel Gorosito

### Day 1
* Setup state - **Douglas**
* Setup splash layout - **Nahuel**
* Setup auth - **Alexander**
* Setup dashboard layout - **Clifford**

### Day 2
* Setup vitals backend/frontend routes & api **Douglas**
* Incorporate dashboard styling **Clifford**
* Design splash page and include session links - **Nahuel**
* Establish link between frontend/backend routes/controllers - **Alexander**

### Day 3
* Style splash/session pages- **Nahuel**
* Implement sidebar functionality & styling - **Clifford**
* Style modal & graph - **Alexander**
* Setup modal & graph functionality - **Douglas**

### Day 4
* Splash/Session Form pages validation styling - **Nahuel**
* Design & implement Roboctor - **Clifford**
* Allergy/Checkup History page functionality - **Douglas**
* Add dashboard info & style for selected vitals - **Alexander**

### Day 5
* Testing & Debugging - **All team members**
* Pixel perfect CSS - **All team members**
* Complete production README.md - **Douglas**

### SUMMARY OF PROJECT IMPLEMENTATION:
BACK END:
- Auth/User patch (Alex)
- Vitals Routes, Validations, Models  (Doug, Alex)
FRONT END:
- Splash & Session Form Styling (Nahuel)
- Dashboard, Sidebar, Allergies/Checkup History  (Doug, Cliff, Alex)
- Redux/React integration w/ Backend (Doug, Alex)
- Modal functionality (Doug)
- Modal Styling (Alex)
- Graph Functionality (Doug, Alex, Cliff)
- Graph Styling & Display Recommended Averages (Alex)
- Dash Info Functionality & Styling (Alex)
- Roboctor Functionality & Styling (Cliff)

## Technical Challenges

- Vitals
  - Displaying visual representations of a user's vitals over time.
- Recharts
  - Displaying detailed information using the recharts library
- Google Maps API
  - A stretch feature of ours is to allow users to look for nearby doctors and medical providers right on the app.
  
## Future/Stretch features
- [ ] Chat with a doctor/provider right through the app
- [ ] Implement more vitals
- [ ] Delete/Edit Vitals
- [ ] Recommendations based on current vital information
- [ ] Alerts/Reminders based on current checkup history


