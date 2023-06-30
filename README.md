# 🎯 Purpose
Google voice numbers get reassigned if you do not use them for a few months. Simply receiving an sms does not qualify as usage, you must send an sms. Email auto-responders do not work as they respond to a different email header in the google voice forwarded emails received. This email bounces. 

To solve this, the email must be responded from the google account in order to deliver the sms. This script is configured in google, checks for new email messages from the google voice service every minute, looks for certain key words in the subject (your pre-approved phone number), then sends out a reply message. If you do not plan to use your google voice numbers for a few months at a time but still need the same number, you can set this script up and send the GV number an sms every month so that the number doesn't expire. If you have a few GV numbers, you can set this script up in each Google account and put a reminder to send them all one text message instead of logging in the web or mobile app to keep it activated.

```
Read the warning at the end, use at your own risk. I am not responsible for any misuse or account lockouts that may result in the usage of this code.
```
# 📝 Instructions

Instructions and script taken from: https://googlevoiceautoreply.com/

Script is modified for simplicity.

## 📧 1. Forward all Google Voice messages to the same account email
- https://voice.google.com/u/0/settings
- Under `Messages`
- Enable the toggle for *Forward messages to email*. This needs to be the same Google email as the account and not an external email account for the script to work.

## 📃 2. Create a new Google App Script
- https://script.google.com/
- Click `New Project`
- Name it anything
- Paste all the code from the `Code.gs` file in this repo to the *Code.gs* file in the Google script
- Change the phone number to the number you are going to use to send "from" to the Google Voice number
- Click the save icon `💾`

## 🏁 3. Create a Trigger 
- Go to `Triggers` on the left
- Click `Add Trigger`
- Select *Every minute* as the minute interval to check for new emails every minute
- `Save`
- `Allow` the script to run under your account by clicking through the next few dialog boxes

## 4. 🧪 Test
- Modify the `subject` variable in line 3 of the script to include your phone number, and hit `save` (if you haven't already)
- Send an sms from your phone number to the Google Voice phone number
- Wait under a minute for the automated reply. Or click `▶️ Run` on the script page.
- You should get an email with the SMS and the script will auto reply to the actual sms as well using your account.


# ⚠️ Warning
Google may flag your account for using scripted responses as it goes against their Terms of Service (ToS). If you explain clearly that it's for a temporary autoresponder when you're unavaible for business, they should reinstate your account.

