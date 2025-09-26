import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DebugTest } from '../components/debug-test'

const meta: Meta<typeof DebugTest> = {
  title: 'Debug/CSS Variables Test',
  component: DebugTest,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}