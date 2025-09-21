import { Modal } from "@/components/ui/modal"
import { Notifications } from "@/components/layout/right-sidebar"

interface NotificationsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NotificationsModal({ isOpen, onClose }: NotificationsModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Notifications"
      className="max-w-sm"
    >
      <Notifications isCollapsed={false} />
    </Modal>
  )
}
