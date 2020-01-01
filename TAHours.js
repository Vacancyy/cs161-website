$(document).ready(function () {
    var TAinfo = [
        {   
            name: "Sabrina Jesmin",
    	    userName: "jesmins",
    	    officeHours: "",
    	    demoHours: "",
    	    doodleLink: ""
    	},
        {   
            name: "Yipeng (Roger) Song",
            userName: "songyip",
            officeHours: "By appointments",
            demoHours: "N/A",
            doodleLink: ""
        },
        {   
            name: "Megan Black",
            userName: "blackme",
            officeHours: "Mon & Wed 12-2pm",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Laura Jiang",
            userName: "jianglau",
            officeHours: "Mon & Fri 10-12pm",
            demoHours: "Tue & Wed 10-12pm",
            doodleLink: "https://calendar.google.com/calendar/selfsched?sstoken=UUlFaGp3TnlmZlRBfGRlZmF1bHR8ZWFkNzE2ZjE0Njc3OWM2Yzg2ZGRmOTRiMmNiNDZmNjY"
        },
        {   
            name: "Thang Kim (LK)",
            userName: "kimth",
            officeHours: "Tue 10-11am",
            demoHours: "Mon 2-4pm",
            doodleLink: "https://doodle.com/poll/gv3vv7tms3hnsw55"
        },
        {   
            name: "Jesse Chick",
            userName: "chickj",
            officeHours: "Tue & Thur 9-10am",
            demoHours: "Mon 9-11am",
            doodleLink: "https://calendar.google.com/calendar/selfsched?sstoken=UUhyeWdSeTA2MzJIfGRlZmF1bHR8Mzc2ZTM5NDlmNjczNGM4ZTBmYWU4ZDBjNTNlZmQyNmI"
        },
        {   
            name: "Erick Branner",
            userName: "brannere",
            officeHours: "",
            demoHours: "Mon 10-12pm & Fri 9-11am",
            doodleLink: "https://calendar.google.com/calendar/selfsched?sstoken=UUt0XzBpd0tac3k4fGRlZmF1bHR8NDY1YmJkYWQxNzU2MzE0ZDhlYjUzYjE5MTQ5ZmU3M2I"
        },
        {   
            name: "Lucas Pichette",
            userName: "pichettl",
            officeHours: "Tue 8-10am & Wed 2-5pm & Thur 8-10am",
            demoHours: "Tue & Thur 11-12pm",
            doodleLink: "https://calendar.google.com/calendar/selfsched?sstoken=UUpjdmJPZ0tzRUpPfGRlZmF1bHR8NzQ0MTQ2MzhkOTY3OTdmNDJiODlhYjQwNDI4NjdlZWU"
        },
        {   
            name: "Miguel Gaspar",
            userName: "gasparmm",
            officeHours: "Fri 9:30-11:30am",
            demoHours: "Thur 4-6pm",
            doodleLink: ""
        },
        {   
            name: "Arthur York",
            userName: "",
            officeHours: "",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Louis Duvoisin",
            userName: "",
            officeHours: "Tue & Thur 11:30-2pm & Fri 11:30-1:30pm",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Austin Wilmoth",
            userName: "",
            officeHours: "Thur 10-12 pm",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Cheng Xie",
            userName: "",
            officeHours: "Mon 3-5pm & Tue 2:30-3:30pm",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Jason O'Brien",
            userName: "",
            officeHours: "",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Jessica Garcia",
            userName: "",
            officeHours: "Mon 6-7pm & Wed 8-9am",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Junze Zhang",
            userName: "",
            officeHours: "",
            demoHours: "",
            doodleLink: ""
        },
        {   
            name: "Maddie Smith",
            userName: "",
            officeHours: "Wed 1-3pm",
            demoHours: "",
            doodleLink: ""
        }
    ];

    var table = '<table class="TAHoursInfo">';
    table += "<tr><th>Name</th><th>Email</th><th>Office Hours (DEAR 119)</th><th>Grading Hours (KEC 1174)</th></tr>";

    for (var x = 0; x < TAinfo.length; x++) {
        table += "<tr>";
        table += '<td>' + TAinfo[x]["name"] + "</td>";
        table += '<td><a href="mailto:' + TAinfo[x]["userName"] + '@oregonstate.edu">' + TAinfo[x]["userName"] + "</a></td>";
        table += '<td>' + TAinfo[x]["officeHours"] + "</td>";
        table += '<td><a href="' + TAinfo[x]["doodleLink"] + '">' + TAinfo[x]["demoHours"] + "</a></td>";
        table += "</tr>";
    }
    table += "</table>";
    $(".TAHours").append(table);
});