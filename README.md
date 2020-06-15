# Vital DB

*The one stop shop for all things vital to your health.*

## Background

We are interested in giving people and health professions an easier access to health records.  Just an overall easier hub to have all of your medical information.  The health field has so many records so organization is extremely important.

## Overview

We will be using AWS, Google Maps API, and other technologies to let users have a easy access to all of their health information.  Will be able to upload images of their records and/or manually up to our site.  A dashboard with easy to read information readily available for users at all times.  Alerts for next checkup reminder, prescription info, prescription reminders, etc to make sure that the user knows when their health needs need to be met.

## Proposal

IMPORT RECORDS: 
- Users can upload their own medical records
- Providers can upload user medical records

UPLOAD RECORDS:
- Users can upload their own medical records
- Providers can upload user medical records

VIEW RECORDS: 
- Users have a summary dashboard of most current vitals
- Users can view detailed individual records
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
**Douglas Crawford, Alexander Tong, Nahuel Gorosito, Clifford Yan**

### Day 1
* Setup record component to upload through AWS - **Douglas**
* Setup splash layout - **Nahuel**
* Setup auth - **Alexander**
* Setup dashboard layout - **Clifford**

### Day 2
* Allow users to download their upload records from AWS & setup record upload/view pages **Douglas**
* Incorporate dashboard styling **Clifford**
* Design splash page and include session links - **Nahuel**
* Establish link between frontend/backend routes/controllers - **Alexander**

### Day 3
* Create record upload/view page - **Nahuel**
* Implement dashboard functionality - **Clifford**
* Setup reducer functionality and tie-in to react project - **Alexander**
* Setup user view permissions for AWS files - **Douglas**

### Day 4
* Style record upload/view page - **Nahuel**
* Incorporate Google map API into website - **Clifford**
* Finalize AWS permissions - **Douglas**
* Hookup backend to display records from AWS on page - **Alexander**

### Day 5
* Testing & Debugging - **All team members**
* Pixel perfect CSS - **All**
* Complete production README.md - **Douglas**


## Technical Challenges

- Security
  - Securing our users' forms and medical information is our most critical priority.
- AWS
  - Allowing our users to upload PDFs and scans of their medical records requires us to use a cloud hosting technology like AWS.
- Google Maps API
  - A stretch feature of ours is to allow users to look for nearby doctors and medical providers right on the app.
  


