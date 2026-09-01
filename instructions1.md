CLOUD PROJECT
# Cloud-Based Personal Medical Record & Emergency Access System

## 1. Project Overview

Build a secure cloud-based personal medical record management system where users can store, organize, access, and manage all of their medical documents and information in one centralized location.

The main purpose of the system is to eliminate the problem of patients having medical records scattered across different hospitals, doctors, physical documents, email accounts, and devices.

The system should also allow users to quickly provide authorized healthcare professionals with access to their medical information, especially during emergencies or when visiting a hospital in another city or country.

The application should be designed as an **AWS cloud-based application**, with AWS services forming the backend infrastructure, storage, authentication, security, monitoring, and other cloud functionality.

---

# 2. Main Users / Actors

The system will have three main types of users:

### Patient

The primary user who:

* Creates an account
* Maintains their medical profile
* Uploads medical documents
* Organizes medical records
* Manages hospital visits
* Manages prescriptions
* Manages appointments
* Stores insurance information
* Creates emergency access
* Shares records temporarily
* Controls permissions
* Views access history
* Receives notifications
* Uses search and AI-assisted features

### Doctor / Healthcare Professional

A healthcare professional who receives temporary access from a patient.

They can:

* Enter an access code or scan a QR code
* Verify their access
* View the records authorized by the patient
* View the patient's emergency medical profile
* View permitted medical documents
* Add consultation/doctor notes where permitted

They should **not** have unrestricted access to the patient's complete account.

### Administrator

The system administrator who manages the platform.

The administrator can:

* Manage users
* Monitor system activity
* Manage reported problems
* Monitor system health
* View system-level logs
* Manage application configuration

The administrator should not automatically have unrestricted access to private medical documents.

---

# 3. Patient Registration & Authentication

The patient should be able to:

* Create an account
* Log in
* Log out
* Reset/change password
* Verify email/phone
* Manage their profile

Authentication should be implemented using **Amazon Cognito**.

---

# 4. Patient Profile

Each patient should have a personal medical profile containing important information.

### Basic information

* Name
* Date of birth
* Gender
* Contact information

### Medical information

* Blood group
* Allergies
* Current medications
* Major medical conditions
* Previous surgeries
* Important medical information

### Emergency information

* Emergency contact details
* Critical information that doctors should see during emergency access

The patient should be able to edit this information.

---

# 5. Medical Document Management

The main functionality of the system is storing medical documents securely.

The patient should be able to upload documents such as:

* Prescriptions
* X-rays
* CT/MRI documents
* Discharge summaries
* Consultation reports
* Vaccination records
* Medical certificates
* Medical bills
* Previous medical history documents
* Other relevant medical documents

Documents can be:

* PDF
* JPG/JPEG
* PNG
* Other appropriate document formats

The actual files should be stored securely in **Amazon S3**.

Document metadata should be stored separately in **Amazon DynamoDB**.

---

# 6. Document Metadata

When uploading a document, the patient should provide information such as:

* Document name
* Document type
* Hospital
* Doctor
* Date of visit
* Description
* Upload date

Example:

```text
Document: Prescription.pdf
Type: Prescription
Hospital: Apollo Hospital
Doctor: Dr. XYZ
Visit Date: 12/06/2026
Description: Prescription after consultation
```

---

# 7. Medical Record Organization

Documents should automatically be organized into categories.

Possible categories:

* Prescriptions
* Scans
* X-rays
* Discharge summaries
* Consultation reports
* Vaccination records
* Medical certificates
* Bills
* Other

Users should be able to filter records by:

* Document type
* Hospital
* Doctor
* Date
* Year

---

# 8. Hospital Visit Management

Instead of treating every document as completely separate, the system should allow patients to create a **Hospital Visit**.

Example:

```text
Hospital Visit

Hospital: Apollo Hospital
Doctor: Dr. XYZ
Date: 12 June 2026
Reason: General Consultation

Documents:
- Consultation Report
- Prescription
- X-Ray
```

This allows several documents to belong to one visit.

Users should be able to view their previous hospital visits.

---

# 9. Medical Timeline

The system should provide a chronological medical timeline.

Example:

```text
2026

June 12
Apollo Hospital
Doctor Consultation
Prescription
X-Ray

April 02
Fortis Hospital
General Consultation

January 17
XYZ Hospital
Discharge Summary
```

The user should be able to click a timeline event and view the associated information and documents.

---

# 10. Medical Record Search

Users should be able to search their records.

Examples:

```text
Search: prescription
Search: Apollo
Search: 2026
Search: X-Ray
Search: Dr. XYZ
```

Search results should display matching records and relevant metadata.

---

# 11. Prescription Management

The application should provide a dedicated area for prescriptions.

Users should be able to:

* Upload prescriptions
* View prescriptions
* Search prescriptions
* See previous prescriptions
* Identify current/active medications
* Store prescription dates
* Associate prescriptions with hospital visits

The system should distinguish between current and historical prescriptions where possible.

---

# 12. Appointment Management

Users should be able to maintain their appointments.

They should be able to:

* Add appointments
* View upcoming appointments
* View previous appointments
* Edit appointments
* Delete appointments

Appointment information can include:

* Hospital
* Doctor
* Date
* Time
* Reason for visit
* Notes

---

# 13. Medical Reminders

The system should provide reminders for:

* Medication
* Follow-up appointments
* Vaccinations
* Repeat medical checks
* Other user-defined medical reminders

Users should be able to:

* Create reminders
* Edit reminders
* Delete reminders
* Mark reminders as completed

Notifications can be implemented using appropriate AWS services.

---

# 14. Insurance Information

The system should allow users to securely store insurance-related information.

Examples:

* Insurance provider
* Policy number
* Policy validity
* Insurance card/document
* Insurance-related documents

Actual insurance documents should be stored securely in S3.

Sensitive metadata should be protected appropriately.

---

# 15. Emergency Medical Profile

The system should have a dedicated **Emergency Medical Profile**.

This is a simplified view containing only critical information.

For example:

```text
EMERGENCY MEDICAL PROFILE

Name: Mehul A.

Blood Group:
O+

Allergies:
Penicillin

Current Medication:
XYZ

Major Conditions:
XYZ

Previous Surgeries:
XYZ

Emergency Contact:
XXXXXXXXXX
```

The purpose is to allow medical staff to quickly understand critical information without going through the patient's entire record.

---

# 16. Emergency QR Code / Medical ID

The patient should be able to generate an emergency access mechanism.

This can be:

* QR code
* Emergency Medical ID
* Short access code

The patient can keep this QR code on their phone or another secure location.

During an emergency, authorized medical personnel can scan the QR code or enter the access code.

The system should then display the patient's emergency medical profile.

---

# 17. Temporary Hospital Access

Patients should be able to give hospitals/doctors temporary access to their records.

The patient selects:

### Records

For example:

```text
☑ Prescription
☑ Consultation Report
☑ Discharge Summary
☐ Medical Bill
☐ X-Ray
```

### Access duration

```text
15 minutes
1 hour
6 hours
24 hours
```

The system generates a temporary access code/QR code.

The hospital uses this to access the selected records.

---

# 18. Access Levels

The system should provide different levels of access.

### Emergency Access

Only critical information:

* Blood group
* Allergies
* Current medication
* Major conditions
* Important medical history

### Limited Access

Patient-selected documents.

### Full Temporary Access

All records selected by the patient for that particular session.

The patient should always control what is shared.

---

# 19. Access Expiration

Temporary access must automatically expire.

Example:

```text
Access Created:
10:00 AM

Duration:
1 hour

Expires:
11:00 AM
```

After expiration:

```text
ACCESS EXPIRED

This medical record access session
is no longer valid.
```

The hospital should no longer be able to retrieve the records through that access session.

---

# 20. Access Revocation

The patient should be able to manually revoke active access.

Example:

```text
Active Access

Apollo Hospital
Expires in 42 minutes

[ REVOKE ACCESS ]
```

After revocation:

```text
Access revoked successfully.
```

---

# 21. Hospital / Doctor Access Portal

Doctors should have a separate interface for accessing shared records.

The doctor can:

* Scan QR code
* Enter access code
* Verify access
* View patient information
* View authorized records
* Download permitted documents
* View emergency information
* Add permitted notes

The doctor should not be able to:

* Access unrelated patient records
* Access the patient's account
* Modify private records without permission
* Access expired sessions

---

# 22. Access History / Audit Trail

Every access to medical information should be recorded.

The patient should be able to see:

```text
ACCESS HISTORY

12 June 2026 – 10:32 AM
Apollo Hospital
Emergency Access

Records accessed:
- Emergency Profile
- Prescription
- Consultation Report

Status: Completed
```

The system should record:

* Who accessed the records
* When they accessed them
* What type of access was used
* Which records were accessed
* Whether the access was successful
* When the access expired/revoked

This is an important security feature.

---

# 23. Notifications

The patient should receive notifications for important events.

Examples:

* New access created
* Medical records accessed
* Access about to expire
* Access expired
* Access revoked
* Appointment reminder
* Medication reminder

---

# 24. Doctor Notes

When permitted, a doctor should be able to add notes associated with a visit.

Example:

```text
Doctor Note

Patient advised to return after 3 months.

Doctor:
Dr. XYZ

Hospital:
Apollo Hospital

Date:
12 June 2026
```

The patient should control whether these notes become part of their permanent medical history.

---

# 25. OCR / AI Features

An optional advanced component can be added to make the system more intelligent.

When a patient uploads a scanned medical document, the system can extract text from it.

For example:

```text
Uploaded:
blood_report.jpg

Extracted Information:
Hemoglobin: 13.8
WBC: 7200
Platelets: 250000
```

AWS services such as **Amazon Textract** can be used for document text extraction.

The extracted text can make documents searchable.

---

# 26. AI Medical Document Summary

The system can optionally generate a simple summary of a document.

Example:

```text
Document Summary

This is a blood test report from
Apollo Hospital dated 12 June 2026.

The report contains the patient's
recorded blood-test measurements.
```

The AI should only summarize the uploaded document and should **not act as a doctor or provide medical diagnosis**.

---

# 27. Dashboard

The patient dashboard should provide a summary of their information.

Example:

```text
MEDVAULT

Medical Records: 32
Hospital Visits: 8
Prescriptions: 12
Upcoming Appointments: 2
Active Shares: 1

[Upload Record]
[Emergency Access]
[Share Records]

Recent Records
Recent Visits
Upcoming Appointments
Reminders
```

---

# 28. AWS Cloud Architecture

The application should be designed around AWS cloud services.

### Frontend / Delivery

* Amazon S3
* Amazon CloudFront
* AWS WAF

### Authentication

* Amazon Cognito

### Backend

* Amazon API Gateway
* AWS Lambda

### Storage

* Amazon S3 for medical documents
* Amazon DynamoDB for metadata and application data

### Security

* AWS IAM
* AWS KMS
* Private S3 buckets
* Temporary/presigned access

### Events / Asynchronous Processing

* Amazon EventBridge
* Amazon SQS

### Notifications

* Amazon SNS / Amazon SES

### Monitoring

* Amazon CloudWatch
* AWS CloudTrail

### AI / Document Processing

* Amazon Textract
* Optional AWS AI/ML services

---

# 29. Security Requirements

Because the system handles sensitive medical information, security should be a major part of the architecture.

The application should include:

* User authentication
* Authorization
* Role-based access
* Private document storage
* Encryption at rest
* Encryption in transit
* Temporary access
* Access expiration
* Access revocation
* Audit logs
* Secure APIs
* Restricted AWS IAM permissions
* Monitoring
* Protection against unauthorized access

Medical documents should never be stored in publicly accessible S3 buckets.

---

# 30. Cloud Architecture Goals

The system should demonstrate the following cloud concepts:

### Scalability

The system should be able to support many users without requiring manual server management.

### Availability

Medical records should remain accessible even if individual backend components fail.

### Security

Sensitive medical information must be protected.

### Fault tolerance

Failures in one part of the system should not bring down the entire application.

### Serverless architecture

Use Lambda/API Gateway where appropriate so backend infrastructure can scale automatically.

### Event-driven architecture

Use events and queues for operations such as:

```text
Record Uploaded
      ↓
Event
      ↓
Document Processing
      ↓
Notification
```

### Monitoring

System activity, errors, and performance should be monitored using AWS CloudWatch and CloudTrail.

---

# 31. Main Application Flow

The overall user flow should be:

```text
User
 ↓
Register/Login
 ↓
Patient Dashboard
 ↓
Create Medical Profile
 ↓
Upload Medical Documents
 ↓
Documents stored in S3
 ↓
Metadata stored in DynamoDB
 ↓
Organize/Search/View Records
 ↓
Create Hospital Visits
 ↓
Manage Prescriptions/Appointments/Reminders/Insurance
 ↓
Generate Emergency Medical ID
 ↓
OR
 ↓
Share Selected Records
 ↓
Generate Temporary QR/Access Code
 ↓
Doctor/Hospital Uses Code
 ↓
Access Verification
 ↓
Authorized Records Displayed
 ↓
Access Activity Logged
 ↓
Access Automatically Expires
```

---

# 32. Main Objective

The final system should solve this problem:

> Patients often have medical information scattered across different hospitals, doctors, laboratories, physical documents, and devices. During emergencies or when visiting an unfamiliar hospital, retrieving complete medical history can be difficult and time-consuming.

The proposed system provides a **centralized, secure, cloud-based medical record platform** where patients can maintain their medical history and provide healthcare professionals with controlled, temporary access when required.

The key focus should be:

**Centralized Records + Security + Emergency Access + Temporary Sharing + Cloud Scalability + Auditability.**
