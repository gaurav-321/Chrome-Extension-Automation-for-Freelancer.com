# Chrome Extension - Automation for Freelancer.com
This is a simple Chrome extension that can be used to automate the bidding process on Freelancer.com. When the extension is installed and activated, it will automatically fill the bid description with a predefined message whenever the user navigates to a project page.

## How to use
Clone or download the repository to your local machine.
Open the Chrome browser and go to **chrome://extensions**.
Enable the **Developer mode** toggle in the top right corner.
Click on **Load unpacked** and select the folder containing the extension files.
The extension should now be installed and activated.
Navigate to a project page on Freelancer.com and wait for the bid description to be automatically filled.
## Customization
You can customize the message that is filled in the bid description by editing the exit_text variable in the extension code. Simply replace the string with your desired message.

## Note
The extension uses a delay of 6 seconds before filling the bid description. This is to allow the page to fully load and prevent any errors. You can adjust this delay by modifying the time in the **setTimeout** function.
