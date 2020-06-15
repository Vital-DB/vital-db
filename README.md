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

## Functionality & MVPs

- [ ] Hosting on Heroku
- [ ] User authorization: sign up, login and logout
- [ ] Users can upload and view their own medical records
- [ ] Providers can upload user medical records
- [ ] Users have a summary dashboard of most current vitals
- [ ] Users have medical reminders (prescription refills/checkups, etc.)
- [ ] Production README

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
  


