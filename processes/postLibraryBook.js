var SERVER_URL = 'http://localhost:3000';

function insertLibraryBook() {
    var libraryBook = {
        "author": "John Grisham",
        "books": [
            { "title": "A Time to Kill", "year": 1989 },
            { "title": "The Firm", "year": 1991 },
            { "title": "The Pelican Brief", "year": 1992 },
            { "title": "The Client", "year": 1993 },
            { "title": "The Chamber", "year": 1994 },
            { "title": "The Rainmaker", "year": 1995 },
            { "title": "The Runaway Jury", "year": 1996 },
            { "title": "The Partner", "year": 1997 },
            { "title": "The Street Lawyer", "year": 1998 },
            { "title": "The Testament", "year": 1999 },
            { "title": "The Brethren", "year": 2000 },
            { "title": "A Painted House", "year": 2001 },
            { "title": "Skipping Christmas", "year": 2001 },
            { "title": "The Summons", "year": 2002 },
            { "title": "The King of Torts", "year": 2003 },
            { "title": "Bleachers†", "year": 2003 },
            { "title": "The Last Juror", "year": 2004 },
            { "title": "The Broker", "year": 2005 },
            { "title": "Playing for Pizza", "year": 2007 },
            { "title": "The Appeal", "year": 2008 },
            { "title": "The Associate", "year": 2009 },
            { "title": "The Confession", "year": 2010 },
            { "title": "The Litigators", "year": 2011 },
            { "title": "Calico Joe", "year": 2012 },
            { "title": "The Racketeer", "year": 2012 },
            { "title": "Sycamore Row", "year": 2013 },
            { "title": "Gray Mountain", "year": 2014 }
        ]
    };

    $.post(SERVER_URL + '/saveNewUser', userData, function (data) {
        alert("New User Created Successfully!");

        sessionStorage.user = JSON.stringify(user);
        sessionStorage.password = user.newPassword;
        $("#btnUserUpdate").val("Update");
        $.mobile.changePage("#pageMenu");
    }).fail(function (error) {
        alert(error.responseText);
    });
};
