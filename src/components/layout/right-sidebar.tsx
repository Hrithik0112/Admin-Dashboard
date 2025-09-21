import { cn } from "@/lib/utils"
import { Bug, User, Wifi, type LucideIcon } from "lucide-react"
import { type ReactNode } from "react"
import { generateAvatarUrl } from "@/lib/utils"

interface RightSidebarProps {
  isCollapsed: boolean
  children: ReactNode
}

interface SectionProps {
  title: string
  children: ReactNode
  isCollapsed: boolean
}

interface NotificationItemProps {
  icon: LucideIcon
  text: string
  timestamp: string
  isCollapsed: boolean
}

interface ActivityItemProps {
  avatar: string
  text: string
  timestamp: string
  isCollapsed: boolean
  isLast?: boolean
}

interface ContactItemProps {
  avatar: string
  name: string
  isCollapsed: boolean
}

// Main RightSidebar component
export function RightSidebar({ isCollapsed, children }: RightSidebarProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col border-l bg-background transition-all duration-300",
        isCollapsed ? "w-16" : "w-80"
      )}
    >
      {/* Header */}
      {/* <div className="flex h-16 items-center justify-center border-b px-4">
        {!isCollapsed && (
          <h1 className="text-lg font-semibold text-foreground">
            Quick Panel
          </h1>
        )}
      </div> */}

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5">
        {children}
      </div>
    </div>
  )
}

// Section component
export function Section({ title, children, isCollapsed }: SectionProps) {
  return (
    <div className="mb-6">
      {!isCollapsed && (
        <h3 className="text-sm font-semibold text-foreground mb-3">
          {title}
        </h3>
      )}
      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}

// Notifications section
export function Notifications({ isCollapsed }: { isCollapsed: boolean }) {
  const notifications = [
    { icon: Bug, text: "You have a bug that needs...", timestamp: "Just now" },
    { icon: User, text: "New user registered.", timestamp: "59 minutes ago" },
    { icon: Bug, text: "You have a bug that needs...", timestamp: "12 hours ago" },
    { icon: Wifi, text: "Andi Lane subscribed to you.", timestamp: "Today, 11:59 AM" },
  ]

  return (
    <Section title="Notifications" isCollapsed={isCollapsed}>
      {notifications.map((notification, index) => (
        <NotificationItem
          key={index}
          icon={notification.icon}
          text={notification.text}
          timestamp={notification.timestamp}
          isCollapsed={isCollapsed}
        />
      ))}
    </Section>
  )
}

// Notification item component
export function NotificationItem({ icon: Icon, text, timestamp, isCollapsed }: NotificationItemProps) {
  if (isCollapsed) {
    return (
      <div className="flex justify-center p-2">
        <Icon className="h-4 w-4 text-blue-500" />
      </div>
    )
  }

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-accent/50 rounded-lg transition-colors">
      <Icon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground">{text}</p>
        <p className="text-xs text-muted-foreground/60 mt-1">{timestamp}</p>
      </div>
    </div>
  )
}

// Activities section
export function Activities({ isCollapsed }: { isCollapsed: boolean }) {
  const activities = [
    { 
      avatar: generateAvatarUrl("developer1"), 
      text: "You have a bug that needs...", 
      timestamp: "Just now" 
    },
    { 
      avatar: generateAvatarUrl("developer2"), 
      text: "Released a new version.", 
      timestamp: "59 minutes ago" 
    },
    { 
      avatar: generateAvatarUrl("developer3"), 
      text: "Submitted a bug.", 
      timestamp: "12 hours ago" 
    },
    { 
      avatar: generateAvatarUrl("developer4"), 
      text: "Modified A data in Page X.", 
      timestamp: "Today, 11:59 AM" 
    },
    { 
      avatar: generateAvatarUrl("developer5"), 
      text: "Deleted a page in Project X.", 
      timestamp: "Feb 2, 2023" 
    },
  ]

  return (
    <Section title="Activities" isCollapsed={isCollapsed}>
      {activities.map((activity, index) => (
        <ActivityItem
          key={index}
          avatar={activity.avatar}
          text={activity.text}
          timestamp={activity.timestamp}
          isCollapsed={isCollapsed}
          isLast={index === activities.length - 1}
        />
      ))}
    </Section>
  )
}

// Activity item component
export function ActivityItem({ avatar, text, timestamp, isCollapsed, isLast }: ActivityItemProps) {
  if (isCollapsed) {
    return (
      <div className="flex justify-center p-2">
        <img 
          src={avatar} 
          alt="Activity avatar" 
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="relative flex items-start space-x-3 p-3 hover:bg-accent/50 rounded-lg transition-colors">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-px h-8 bg-muted-foreground/20"></div>
      )}
      
      <img 
        src={avatar} 
        alt="Activity avatar" 
        className="w-8 h-8 rounded-full object-cover flex-shrink-0 relative z-10"
      />
      
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground">{text}</p>
        <p className="text-xs text-muted-foreground/60 mt-1">{timestamp}</p>
      </div>
    </div>
  )
}

// Contacts section
export function Contacts({ isCollapsed }: { isCollapsed: boolean }) {
  const contacts = [
    { avatar: generateAvatarUrl("natali"), name: "Natali Craig" },
    { avatar: generateAvatarUrl("drew"), name: "Drew Cano" },
    { avatar: generateAvatarUrl("orlando"), name: "Orlando Diggs" },
    { avatar: generateAvatarUrl("andi"), name: "Andi Lane" },
    { avatar: generateAvatarUrl("kate"), name: "Kate Morrison" },
    { avatar: generateAvatarUrl("koray"), name: "Koray Okumus" },
  ]

  return (
    <Section title="Contacts" isCollapsed={isCollapsed}>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          avatar={contact.avatar}
          name={contact.name}
          isCollapsed={isCollapsed}
        />
      ))}
    </Section>
  )
}

// Contact item component
export function ContactItem({ avatar, name, isCollapsed }: ContactItemProps) {
  if (isCollapsed) {
    return (
      <div className="flex justify-center p-2">
        <img 
          src={avatar} 
          alt={`${name} avatar`} 
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-3 p-3 hover:bg-accent/50 rounded-lg transition-colors">
      <img 
        src={avatar} 
        alt={`${name} avatar`} 
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground">{name}</p>
      </div>
    </div>
  )
}


