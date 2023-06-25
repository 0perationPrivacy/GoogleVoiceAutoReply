# 📝 Instructions

Instructions and script taken from: https://googlevoiceautoreply.com/

Script is modified for simplicity.

## 📧 1. Forward all Google Voice messages to the same account email
- https://voice.google.com/u/0/settings
- Messages
- Enable the toggle for *Forward messages to email*. This needs to be the same Google email as the account and not an external email account for the script to work.

## 📃 2. Create a new Google App Script
- https://script.google.com/
- New Project
- Name it anything
- Paste all the code from the `Code.gs` file in this repo to the *Code.gs* file in the Google script
- Click the save icon 💾

## 🏁 3. Create a Trigger 
- Go to `Triggers` on the left
- Click `Add Trigger`
- Select *Every minute* as the minute interval to check for new emails every minute
- `Save`
- `Allow` the script to run under your account by clicking through the next few dialog boxes

## 4. 🧪 Test
- Modify the `subject` variable in line 3 of the script to include your phone number, and hit `save`
- Send an sms from your phone number to the Google Voice phone number
- Wait under a minute for the automated reply. Or click `▶️ Run` on the script page.


# ⚠️ Warning
Google may flag your account for using scripted responses as it goes against their Terms of Service (ToS). If you explain clearly that it's for a temporary autoresponder when you're unavaible for business, they should reinstate your account.

