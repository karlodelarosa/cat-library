import type CommandInterface from '@/core/domain/contract/CommandInterface'

/**
 * We can consider this a bus class that transports the command to its handlers
 */
export default class Cat {
  command(command: CommandInterface) {
    command.handle()
  }
}
