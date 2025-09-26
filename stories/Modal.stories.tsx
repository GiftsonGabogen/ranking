import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalFooter, 
  ModalTitle, 
  ModalDescription, 
  ModalTrigger,
  ModalClose
} from '@/components/ui/modal'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog component with customizable animations and effects, built on Radix UI Dialog primitive.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'Whether the modal is open by default',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a default modal dialog. You can add any content here.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            This is the main content area of the modal. You can place any components, 
            forms, or content you need here.
          </p>
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </ModalClose>
          <Button>Save Changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Modal>
        <ModalTrigger asChild>
          <Button>Default</Button>
        </ModalTrigger>
        <ModalContent variant="default">
          <ModalHeader>
            <ModalTitle>Default Modal</ModalTitle>
            <ModalDescription>Standard modal with default styling.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="glass">Glass</Button>
        </ModalTrigger>
        <ModalContent variant="glass">
          <ModalHeader>
            <ModalTitle>Glass Modal</ModalTitle>
            <ModalDescription>Modal with glass morphism effect and backdrop blur.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="gradient">Gradient</Button>
        </ModalTrigger>
        <ModalContent variant="gradient">
          <ModalHeader>
            <ModalTitle>Gradient Modal</ModalTitle>
            <ModalDescription>Modal with subtle gradient background.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Elevated</Button>
        </ModalTrigger>
        <ModalContent variant="elevated">
          <ModalHeader>
            <ModalTitle>Elevated Modal</ModalTitle>
            <ModalDescription>Modal with enhanced shadow and elevated appearance.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Modal>
        <ModalTrigger asChild>
          <Button size="xs">Extra Small</Button>
        </ModalTrigger>
        <ModalContent size="xs">
          <ModalHeader>
            <ModalTitle>Extra Small Modal</ModalTitle>
            <ModalDescription>A compact modal for simple actions.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button size="sm" variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button size="sm">Small</Button>
        </ModalTrigger>
        <ModalContent size="sm">
          <ModalHeader>
            <ModalTitle>Small Modal</ModalTitle>
            <ModalDescription>A small modal for focused content.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button>Default</Button>
        </ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Default Size Modal</ModalTitle>
            <ModalDescription>Standard size modal for most use cases.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button size="lg">Large</Button>
        </ModalTrigger>
        <ModalContent size="lg">
          <ModalHeader>
            <ModalTitle>Large Modal</ModalTitle>
            <ModalDescription>A larger modal for more extensive content and forms.</ModalDescription>
          </ModalHeader>
          <div className="py-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              This modal has more space for content, making it ideal for:
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2 ml-4">
              <li>• Complex forms with multiple fields</li>
              <li>• Detailed information displays</li>
              <li>• Multi-step workflows</li>
              <li>• Rich content with images and text</li>
            </ul>
          </div>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Cancel</Button>
            </ModalClose>
            <Button>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button size="xl">Extra Large</Button>
        </ModalTrigger>
        <ModalContent size="xl">
          <ModalHeader>
            <ModalTitle>Extra Large Modal</ModalTitle>
            <ModalDescription>The largest modal size for comprehensive content.</ModalDescription>
          </ModalHeader>
          <div className="py-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Left Column</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  This extra large modal provides ample space for complex layouts 
                  and multi-column content arrangements.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Right Column</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Perfect for dashboards, detailed forms, or any content that 
                  requires significant screen real estate.
                </p>
              </div>
            </div>
          </div>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Cancel</Button>
            </ModalClose>
            <Button>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  ),
}

export const Animations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Modal>
        <ModalTrigger asChild>
          <Button>Default Animation</Button>
        </ModalTrigger>
        <ModalContent animation="default">
          <ModalHeader>
            <ModalTitle>Default Animation</ModalTitle>
            <ModalDescription>Standard smooth fade and scale animation.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Bounce</Button>
        </ModalTrigger>
        <ModalContent animation="bounce">
          <ModalHeader>
            <ModalTitle>Bounce Animation</ModalTitle>
            <ModalDescription>Playful bounce effect with spring-like motion.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="success">Slide</Button>
        </ModalTrigger>
        <ModalContent animation="slide">
          <ModalHeader>
            <ModalTitle>Slide Animation</ModalTitle>
            <ModalDescription>Elegant slide-up animation from bottom.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="warning">Scale</Button>
        </ModalTrigger>
        <ModalContent animation="scale">
          <ModalHeader>
            <ModalTitle>Scale Animation</ModalTitle>
            <ModalDescription>Simple scale-in animation effect.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="destructive">Fast</Button>
        </ModalTrigger>
        <ModalContent animation="fast">
          <ModalHeader>
            <ModalTitle>Fast Animation</ModalTitle>
            <ModalDescription>Quick and snappy animation for efficiency.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="glass">Slow</Button>
        </ModalTrigger>
        <ModalContent animation="slow">
          <ModalHeader>
            <ModalTitle>Slow Animation</ModalTitle>
            <ModalDescription>Deliberate, elegant slower animation.</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button variant="outline">Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Create Account</Button>
      </ModalTrigger>
      <ModalContent size="lg">
        <ModalHeader>
          <ModalTitle>Create New Account</ModalTitle>
          <ModalDescription>
            Fill in the information below to create your new account.
          </ModalDescription>
        </ModalHeader>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                id="firstName"
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:border-neutral-600 dark:bg-neutral-800"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:border-neutral-600 dark:bg-neutral-800"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:border-neutral-600 dark:bg-neutral-800"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:border-neutral-600 dark:bg-neutral-800"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="rounded border-neutral-300 focus:ring-2 focus:ring-primary-500"
            />
            <label htmlFor="terms" className="text-sm text-neutral-600 dark:text-neutral-400">
              I agree to the terms and conditions
            </label>
          </div>
        </form>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </ModalClose>
          <Button>Create Account</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const ConfirmationDialog: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </ModalTrigger>
      <ModalContent size="sm" variant="elevated">
        <ModalHeader>
          <ModalTitle className="text-error-600 dark:text-error-400">
            Confirm Deletion
          </ModalTitle>
          <ModalDescription>
            Are you sure you want to delete this item? This action cannot be undone.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <div className="p-4 bg-error-50 dark:bg-error-900/20 rounded-md border border-error-200 dark:border-error-800/50">
            <p className="text-sm text-error-700 dark:text-error-300">
              <strong>Warning:</strong> This will permanently remove the item and all associated data.
            </p>
          </div>
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline">Cancel</Button>
          </ModalClose>
          <Button variant="destructive">Delete</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const FullScreenModal: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button size="lg">Open Full Screen</Button>
      </ModalTrigger>
      <ModalContent size="full" variant="glass">
        <ModalHeader>
          <ModalTitle>Full Screen Modal</ModalTitle>
          <ModalDescription>
            This modal takes up most of the screen space for maximum content visibility.
          </ModalDescription>
        </ModalHeader>
        <div className="flex-1 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Section 1</h3>
              <div className="space-y-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                    <h4 className="font-medium mb-2">Item {i + 1}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      This is some sample content for the full screen modal demonstration.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Section 2</h3>
              <div className="space-y-3">
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-700/50">
                    <h4 className="font-medium mb-2 text-primary-700 dark:text-primary-300">Feature {i + 1}</h4>
                    <p className="text-sm text-primary-600 dark:text-primary-400">
                      Enhanced functionality and features are showcased here.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Section 3</h3>
              <div className="space-y-3">
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="p-4 bg-success-50 dark:bg-success-900/20 rounded-lg border border-success-200 dark:border-success-700/50">
                    <h4 className="font-medium mb-2 text-success-700 dark:text-success-300">Success {i + 1}</h4>
                    <p className="text-sm text-success-600 dark:text-success-400">
                      Positive outcomes and achievements are highlighted in this section.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="outline" size="lg">Close</Button>
          </ModalClose>
          <Button size="lg">Save Changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Button onClick={() => setIsOpen(true)}>
            Open Controlled Modal
          </Button>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            State: {isOpen ? 'Open' : 'Closed'}
          </span>
        </div>
        
        <Modal open={isOpen} onOpenChange={setIsOpen}>
          <ModalContent animation="bounce">
            <ModalHeader>
              <ModalTitle>Controlled Modal</ModalTitle>
              <ModalDescription>
                This modal's open state is controlled by React state.
              </ModalDescription>
            </ModalHeader>
            <div className="py-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                You can control when this modal opens and closes programmatically.
              </p>
              <div className="flex space-x-2">
                <Button size="sm" onClick={() => setIsOpen(false)}>
                  Close via State
                </Button>
                <Button size="sm" variant="outline" onClick={() => setIsOpen(!isOpen)}>
                  Toggle
                </Button>
              </div>
            </div>
            <ModalFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  },
}