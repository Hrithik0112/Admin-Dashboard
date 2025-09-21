import { generateAvatarUrl } from "./utils";

export interface Order {
    id: string
    user: {
      name: string
      avatar: string
    }
    project: string
    address: string
    date: string
    status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected"
  }

export const orders: Order[] = [
    {
      id: "CM9801",
      user: {
        name: "Natali Craig",
        avatar: generateAvatarUrl("natali")
      },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress"
    },
    {
      id: "CM9802",
      user: {
        name: "Orlando Diggs",
        avatar: generateAvatarUrl("orlando")
      },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Complete"
    },
    {
      id: "CM9803",
      user: {
        name: "Andi Lane",
        avatar: generateAvatarUrl("andi")
      },
      project: "Mobile App",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected"
    },
    {
      id: "CM9804",
      user: {
        name: "Kate Morrison",
        avatar: generateAvatarUrl("kate")
      },
      project: "Website Redesign",
      address: "Oak Street Portland",
      date: "Feb 1, 2023",
      status: "Pending"
    },
    {
      id: "CM9805",
      user: {
        name: "John Smith",
        avatar: generateAvatarUrl("john")
      },
      project: "E-commerce Platform",
      address: "Main Street Seattle",
      date: "Jan 31, 2023",
      status: "Approved"
    },
    {
      id: "CM9806",
      user: {
        name: "Sarah Johnson",
        avatar: generateAvatarUrl("sarah")
      },
      project: "Blog Platform",
      address: "Park Avenue New York",
      date: "Jan 30, 2023",
      status: "In Progress"
    },
    {
      id: "CM9807",
      user: {
        name: "Mike Davis",
        avatar: generateAvatarUrl("mike")
      },
      project: "Portfolio Site",
      address: "Broadway Los Angeles",
      date: "Jan 29, 2023",
      status: "Complete"
    },
    {
      id: "CM9808",
      user: {
        name: "Emily Wilson",
        avatar: generateAvatarUrl("emily")
      },
      project: "SaaS Dashboard",
      address: "Market Street San Francisco",
      date: "Jan 28, 2023",
      status: "Pending"
    },
    {
      id: "CM9809",
      user: {
        name: "David Brown",
        avatar: generateAvatarUrl("david")
      },
      project: "API Documentation",
      address: "First Avenue Chicago",
      date: "Jan 27, 2023",
      status: "Approved"
    },
    {
      id: "CM9810",
      user: {
        name: "Lisa Anderson",
        avatar: generateAvatarUrl("lisa")
      },
      project: "Mobile Game",
      address: "Second Street Miami",
      date: "Jan 26, 2023",
      status: "Rejected"
    },
    {
      id: "CM9811",
      user: {
        name: "Tom Wilson",
        avatar: generateAvatarUrl("tom")
      },
      project: "Analytics Dashboard",
      address: "Third Avenue Boston",
      date: "Jan 25, 2023",
      status: "In Progress"
    },
    {
      id: "CM9812",
      user: {
        name: "Anna Taylor",
        avatar: generateAvatarUrl("anna")
      },
      project: "CRM System",
      address: "Fourth Street Denver",
      date: "Jan 24, 2023",
      status: "Complete"
    },
    {
      id: "CM9813",
      user: {
        name: "Robert Garcia",
        avatar: generateAvatarUrl("robert")
      },
      project: "E-learning Platform",
      address: "Fifth Avenue Phoenix",
      date: "Jan 23, 2023",
      status: "Pending"
    },
    {
      id: "CM9814",
      user: {
        name: "Jennifer Martinez",
        avatar: generateAvatarUrl("jennifer")
      },
      project: "Social Media App",
      address: "Sixth Street Dallas",
      date: "Jan 22, 2023",
      status: "Approved"
    },
    {
      id: "CM9815",
      user: {
        name: "William Rodriguez",
        avatar: generateAvatarUrl("william")
      },
      project: "Inventory System",
      address: "Seventh Avenue Houston",
      date: "Jan 21, 2023",
      status: "In Progress"
    },
    {
      id: "CM9816",
      user: {
        name: "Linda Thompson",
        avatar: generateAvatarUrl("linda")
      },
      project: "Booking Platform",
      address: "Eighth Street Philadelphia",
      date: "Jan 20, 2023",
      status: "Complete"
    },
    {
      id: "CM9817",
      user: {
        name: "James White",
        avatar: generateAvatarUrl("james")
      },
      project: "Payment Gateway",
      address: "Ninth Avenue San Antonio",
      date: "Jan 19, 2023",
      status: "Rejected"
    },
    {
      id: "CM9818",
      user: {
        name: "Patricia Harris",
        avatar: generateAvatarUrl("patricia")
      },
      project: "Content Management",
      address: "Tenth Street San Diego",
      date: "Jan 18, 2023",
      status: "Pending"
    },
    {
      id: "CM9819",
      user: {
        name: "Michael Clark",
        avatar: generateAvatarUrl("michael")
      },
      project: "Video Streaming",
      address: "Eleventh Avenue Jacksonville",
      date: "Jan 17, 2023",
      status: "Approved"
    },
    {
      id: "CM9820",
      user: {
        name: "Barbara Lewis",
        avatar: generateAvatarUrl("barbara")
      },
      project: "Task Management",
      address: "Twelfth Street Indianapolis",
      date: "Jan 16, 2023",
      status: "In Progress"
    },
    {
      id: "CM9821",
      user: {
        name: "Richard Walker",
        avatar: generateAvatarUrl("richard")
      },
      project: "Email Marketing",
      address: "Thirteenth Avenue Columbus",
      date: "Jan 15, 2023",
      status: "Complete"
    },
    {
      id: "CM9822",
      user: {
        name: "Susan Hall",
        avatar: generateAvatarUrl("susan")
      },
      project: "Customer Support",
      address: "Fourteenth Street Fort Worth",
      date: "Jan 14, 2023",
      status: "Rejected"
    },
    {
      id: "CM9823",
      user: {
        name: "Joseph Allen",
        avatar: generateAvatarUrl("joseph")
      },
      project: "Data Analytics",
      address: "Fifteenth Avenue Charlotte",
      date: "Jan 13, 2023",
      status: "Pending"
    },
    {
      id: "CM9824",
      user: {
        name: "Jessica Young",
        avatar: generateAvatarUrl("jessica")
      },
      project: "Project Tracking",
      address: "Sixteenth Street Seattle",
      date: "Jan 12, 2023",
      status: "Approved"
    },
    {
      id: "CM9825",
      user: {
        name: "Thomas King",
        avatar: generateAvatarUrl("thomas")
      },
      project: "File Sharing",
      address: "Seventeenth Avenue Denver",
      date: "Jan 11, 2023",
      status: "In Progress"
    },
    {
      id: "CM9826",
      user: {
        name: "Sarah Wright",
        avatar: generateAvatarUrl("sarah2")
      },
      project: "Time Tracking",
      address: "Eighteenth Street Washington",
      date: "Jan 10, 2023",
      status: "Complete"
    },
    {
      id: "CM9827",
      user: {
        name: "Christopher Lopez",
        avatar: generateAvatarUrl("christopher")
      },
      project: "Survey Platform",
      address: "Nineteenth Avenue Boston",
      date: "Jan 9, 2023",
      status: "Rejected"
    },
    {
      id: "CM9828",
      user: {
        name: "Nancy Hill",
        avatar: generateAvatarUrl("nancy")
      },
      project: "Event Management",
      address: "Twentieth Street El Paso",
      date: "Jan 8, 2023",
      status: "Pending"
    },
    {
      id: "CM9829",
      user: {
        name: "Daniel Scott",
        avatar: generateAvatarUrl("daniel")
      },
      project: "Fitness Tracker",
      address: "Twenty-First Avenue Nashville",
      date: "Jan 7, 2023",
      status: "Approved"
    },
    {
      id: "CM9830",
      user: {
        name: "Karen Green",
        avatar: generateAvatarUrl("karen")
      },
      project: "Recipe App",
      address: "Twenty-Second Street Detroit",
      date: "Jan 6, 2023",
      status: "In Progress"
    },
    {
      id: "CM9831",
      user: {
        name: "Paul Adams",
        avatar: generateAvatarUrl("paul")
      },
      project: "Weather App",
      address: "Twenty-Third Avenue Oklahoma City",
      date: "Jan 5, 2023",
      status: "Complete"
    },
    {
      id: "CM9832",
      user: {
        name: "Betty Baker",
        avatar: generateAvatarUrl("betty")
      },
      project: "News Aggregator",
      address: "Twenty-Fourth Street Portland",
      date: "Jan 4, 2023",
      status: "Rejected"
    },
    {
      id: "CM9833",
      user: {
        name: "Mark Gonzalez",
        avatar: generateAvatarUrl("mark")
      },
      project: "Chat Application",
      address: "Twenty-Fifth Avenue Las Vegas",
      date: "Jan 3, 2023",
      status: "Pending"
    },
    {
      id: "CM9834",
      user: {
        name: "Helen Nelson",
        avatar: generateAvatarUrl("helen")
      },
      project: "Photo Gallery",
      address: "Twenty-Sixth Street Milwaukee",
      date: "Jan 2, 2023",
      status: "Approved"
    },
    {
      id: "CM9835",
      user: {
        name: "Donald Carter",
        avatar: generateAvatarUrl("donald")
      },
      project: "Music Player",
      address: "Twenty-Seventh Avenue Albuquerque",
      date: "Jan 1, 2023",
      status: "In Progress"
    },
    {
      id: "CM9836",
      user: {
        name: "Dorothy Mitchell",
        avatar: generateAvatarUrl("dorothy")
      },
      project: "Calendar App",
      address: "Twenty-Eighth Street Tucson",
      date: "Dec 31, 2022",
      status: "Complete"
    },
    {
      id: "CM9837",
      user: {
        name: "George Perez",
        avatar: generateAvatarUrl("george")
      },
      project: "Note Taking",
      address: "Twenty-Ninth Avenue Fresno",
      date: "Dec 30, 2022",
      status: "Rejected"
    },
    {
      id: "CM9838",
      user: {
        name: "Lisa Roberts",
        avatar: generateAvatarUrl("lisa2")
      },
      project: "Expense Tracker",
      address: "Thirtieth Street Sacramento",
      date: "Dec 29, 2022",
      status: "Pending"
    },
    {
      id: "CM9839",
      user: {
        name: "Kenneth Turner",
        avatar: generateAvatarUrl("kenneth")
      },
      project: "Habit Tracker",
      address: "Thirty-First Avenue Mesa",
      date: "Dec 28, 2022",
      status: "Approved"
    },
    {
      id: "CM9840",
      user: {
        name: "Sandra Phillips",
        avatar: generateAvatarUrl("sandra")
      },
      project: "Password Manager",
      address: "Thirty-Second Street Kansas City",
      date: "Dec 27, 2022",
      status: "In Progress"
    },
    {
      id: "CM9841",
      user: {
        name: "Edward Campbell",
        avatar: generateAvatarUrl("edward")
      },
      project: "Stock Tracker",
      address: "Thirty-Third Avenue Atlanta",
      date: "Dec 26, 2022",
      status: "Complete"
    },
    {
      id: "CM9842",
      user: {
        name: "Donna Parker",
        avatar: generateAvatarUrl("donna")
      },
      project: "Language Learning",
      address: "Thirty-Fourth Street Omaha",
      date: "Dec 25, 2022",
      status: "Rejected"
    },
    {
      id: "CM9843",
      user: {
        name: "Ronald Evans",
        avatar: generateAvatarUrl("ronald")
      },
      project: "Code Editor",
      address: "Thirty-Fifth Avenue Raleigh",
      date: "Dec 24, 2022",
      status: "Pending"
    },
    {
      id: "CM9844",
      user: {
        name: "Carol Edwards",
        avatar: generateAvatarUrl("carol")
      },
      project: "Drawing App",
      address: "Thirty-Sixth Street Miami",
      date: "Dec 23, 2022",
      status: "Approved"
    },
    {
      id: "CM9845",
      user: {
        name: "Anthony Collins",
        avatar: generateAvatarUrl("anthony")
      },
      project: "VPN Client",
      address: "Thirty-Seventh Avenue Virginia Beach",
      date: "Dec 22, 2022",
      status: "In Progress"
    },
    {
      id: "CM9846",
      user: {
        name: "Ruth Stewart",
        avatar: generateAvatarUrl("ruth")
      },
      project: "Translation Tool",
      address: "Thirty-Eighth Street Oakland",
      date: "Dec 21, 2022",
      status: "Complete"
    },
    {
      id: "CM9847",
      user: {
        name: "Kevin Sanchez",
        avatar: generateAvatarUrl("kevin")
      },
      project: "QR Code Generator",
      address: "Thirty-Ninth Avenue Minneapolis",
      date: "Dec 20, 2022",
      status: "Rejected"
    },
    {
      id: "CM9848",
      user: {
        name: "Sharon Morris",
        avatar: generateAvatarUrl("sharon")
      },
      project: "Color Palette",
      address: "Fortieth Street Tulsa",
      date: "Dec 19, 2022",
      status: "Pending"
    }
  ]