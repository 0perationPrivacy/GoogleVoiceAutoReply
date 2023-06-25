function autoReply() {
  var autoreplyMessage = "This is an auto generated response to a known phone number";
  var subject = ["\\(123\\) 456-789", "\\(123\\) 867-5309"]
  // Looks for phone number in subject line, put two back slashes before the paranthesis to escape the special character
  // Put multiple numbers in this variable separated by a comma. Messages received ONLY from these numbers will trigger a reply
  // To reply to ALL smses, put in another variable "New text message from" at the end or only have this text in. The script cycles through all entries in the variable to find a hit.

  var d = new Date();
  var newestThreads = GmailApp.getInboxThreads(0, 7);
  for (var i = 0; i < newestThreads.length; i++) {
    for (var j = 0; j < subject.length; j++) {
      if (newestThreads[i].getFirstMessageSubject().search(subject[j]) != -1) {
        var alreadyReplied = false;
        var justCameIn = false;
        var messages = GmailApp.getMessagesForThread(newestThreads[i]);
        if (messages[messages.length - 1].getFrom().search("voice.google.com") == -1) {
          alreadyReplied = true;
        }
        if (d - messages[messages.length - 1].getDate() <= 5 * 60 * 1000) {
          justCameIn = true;
        }
        if (!alreadyReplied && justCameIn) {
          Logger.log("Sending message!");
          messages[messages.length - 1].reply(autoreplyMessage);
        }
      }
    }
  }
}
