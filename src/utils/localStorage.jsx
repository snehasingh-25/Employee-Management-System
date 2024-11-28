
const employees = [
  {
    id: 1,
    name: "Alice",
    email: "a@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Report Completion",
        description: "Complete the client report by the end of the week.",
        category: "Reporting",
        taskDate: "2024-11-15",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Presentation Slide Preparation",
        description: "Create and organize slides for upcoming client presentation.",
        category: "Presentation",
        taskDate: "2024-11-20",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Budget Analysis Draft",
        description: "Prepare the draft for next month's budget analysis.",
        category: "Finance",
        taskDate: "2024-11-25",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Team Meeting Minutes",
        description: "Summarize and document the minutes of the weekly team meeting.",
        category: "Management",
        taskDate: "2024-11-10",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "HR Compliance Checklist",
        description: "Verify compliance with the updated HR policies.",
        category: "HR",
        taskDate: "2024-11-12",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      completed: 2,
      newTask: 2,
      failed: 1
    }
  },
  {
    id: 2,
    name: "Bob",
    email: "bob.smith@example.com",
    password: "123",
    tasks: [
      {
        title: "Software Module Update",
        description: "Update all software modules to the latest version.",
        category: "Development",
        taskDate: "2024-11-14",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review for Project X",
        description: "Review and provide feedback on Project X's codebase.",
        category: "Development",
        taskDate: "2024-11-18",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Test Case Development",
        description: "Create detailed test cases for new feature rollout.",
        category: "Testing",
        taskDate: "2024-11-16",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "API Documentation Update",
        description: "Update API documentation for the development team.",
        category: "Documentation",
        taskDate: "2024-11-10",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Client Issue Debugging",
        description: "Resolve critical client-reported issues in the application.",
        category: "Support",
        taskDate: "2024-11-12",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      completed: 4,
      newTask: 2,
      failed: 5
    }
  },
  {
    id: 3,
    name: "Clara",
    email: "c@e.com",
    password: "123",
    tasks: [
      {
        title: "Client Follow-Up Call",
        description: "Reach out to the client for feedback on recent project milestones.",
        category: "Client Relations",
        taskDate: "2024-11-16",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Draft Financial Report",
        description: "Prepare the initial draft of the monthly financial report.",
        category: "Finance",
        taskDate: "2024-11-19",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Marketing Strategy Review",
        description: "Evaluate the effectiveness of the recent marketing strategy.",
        category: "Marketing",
        taskDate: "2024-11-20",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Customer Feedback Analysis",
        description: "Analyze survey responses to identify improvement areas.",
        category: "Customer Service",
        taskDate: "2024-11-10",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Sales Pipeline Optimization",
        description: "Streamline the sales pipeline to improve efficiency.",
        category: "Sales",
        taskDate: "2024-11-13",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 2,
      completed: 3,
      newTask: 2,
      failed: 1
    }
  },
  {
    id: 4,
    name: "Daniel",
    email: "daniel.brown@example.com",
    password: "123",
    tasks: [
      {
        title: "Warehouse Inventory Check",
        description: "Perform a full inventory check in the warehouse.",
        category: "Operations",
        taskDate: "2024-11-14",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Safety Audit",
        description: "Conduct a safety audit in the warehouse to ensure compliance.",
        category: "Safety",
        taskDate: "2024-11-22",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Equipment Maintenance Report",
        description: "Prepare a report on the status of equipment maintenance.",
        category: "Maintenance",
        taskDate: "2024-11-18",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Emergency Drill Plan",
        description: "Develop and finalize an emergency drill plan for the team.",
        category: "Safety",
        taskDate: "2024-11-20",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Supplier Evaluation",
        description: "Assess supplier performance based on delivery metrics.",
        category: "Supply Chain",
        taskDate: "2024-11-16",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      completed: 2,
      newTask: 2,
      failed: 1
    }
  },
  {
    id: 5,
    name: "Emily",
    email: "emily.white@example.com",
    password: "123",
    tasks: [
      {
        title: "Team Training Session",
        description: "Organize and conduct a training session for new team members.",
        category: "Training",
        taskDate: "2024-11-17",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Year-End Review Preparation",
        description: "Prepare documents for the year-end performance review.",
        category: "Management",
        taskDate: "2024-12-01",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Policy Revision Notes",
        description: "Draft revision notes for company-wide policy updates.",
        category: "HR",
        taskDate: "2024-11-25",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Employee Satisfaction Survey",
        description: "Prepare and distribute the quarterly employee satisfaction survey.",
        category: "HR",
        taskDate: "2024-11-15",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Client Retention Strategy",
        description: "Develop a strategy to improve client retention rates.",
        category: "Client Relations",
        taskDate: "2024-11-10",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      completed: 1,
      newTask: 2,
      failed: 2
    }
  }  

  // Add additional employees as needed
];

  
  const admin = [{
    "id": 100,
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
   const employees=JSON.parse(localStorage.getItem('employees'))
   const admin=JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
} 