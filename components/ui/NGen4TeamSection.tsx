'use client'

const departmentLabels = [
    'Super Intelligence Research',
    'Core Intelligence Lab',
    'Safety & Alignment',
    'Interpretability & Cognitive Systems',
    'Applied Intelligence - India Lab',
    'Multimodal & Perception',
]

const teamMembers = [
    { name: 'Thishyaketh', department: 1 },
    { name: 'Aarav', department: 1 },
    { name: 'Vivaan', department: 1 },
    { name: 'Aditya', department: 1 },
    { name: 'Arjun', department: 1 },
    { name: 'Kunal', department: 1 },
    { name: 'Rohit', department: 1 },
    { name: 'Rishi', department: 2 },
    { name: 'Arya', department: 2 },
    { name: 'Ishaan', department: 2 },
    { name: 'Rahul', department: 2 },
    { name: 'Aman', department: 2 },
    { name: 'Varun', department: 2 },
    { name: 'Devansh', department: 3 },
    { name: 'Dhruv', department: 3 },
    { name: 'Naitik', department: 3 },
    { name: 'Saurav', department: 3 },
    { name: 'Ankit', department: 3 },
    { name: 'Raj', department: 3 },
    { name: 'Kritarth', department: 4 },
    { name: 'Manan', department: 4 },
    { name: 'Pranav', department: 4 },
    { name: 'Tanish', department: 4 },
    { name: 'Ayush', department: 4 },
    { name: 'Vivek', department: 4 },
    { name: 'Dr. Amala', department: 5 },
    { name: 'Neelansh', department: 5 },
    { name: 'Vihaan', department: 5 },
    { name: 'Karthik', department: 5 },
    { name: 'Krish', department: 5 },
    { name: 'Harsh', department: 5 },
    { name: 'Abhishek', department: 5 },
    { name: 'Darshan', department: 6 },
    { name: 'Netra', department: 6 },
    { name: 'Shravan', department: 6 },
    { name: 'Rohan', department: 6 },
    { name: 'Mohit', department: 6 },
    { name: 'Nikhil', department: 6 },
    { name: 'Akash', department: 6 },
]

export function NGen4TeamSection() {
    return (
        <section className="mb-12 mt-8 text-center">
            <div className="mb-7 flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium text-gray-700 md:text-lg">
                {teamMembers.map((member) => (
                    <span key={`${member.name}-${member.department}`}>
                        {member.name}
                        <sup>{member.department}</sup>
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-y-2 text-sm text-gray-500">
                {departmentLabels.map((label, index) => (
                    <span key={label}>
                        <sup>{index + 1}</sup> {label}
                        {index < departmentLabels.length - 1 ? <span className="mx-4">|</span> : null}
                    </span>
                ))}
            </div>
        </section>
    )
}
