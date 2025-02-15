import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui-vitor-martini/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/vitor-martini.png',
    alt: 'Vitor Martini',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
