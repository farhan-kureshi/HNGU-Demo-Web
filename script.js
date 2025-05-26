function validation() {

    if (document.vld.name.value == "") {
        alert("Enter Your Name");
        document.vld.name.focus();
    }
    else if (document.vld.email.value == "") {
        alert("Enter Your Email");
        document.vld.email.focus();
    }
    else if (document.vld.comment.value == "") {
        alert("Enter Your commant");
        document.vld.comment.focus();
    }

}