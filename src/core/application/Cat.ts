import type CommandInterface from "@/core/domain/contract/CommandInterface"

export default class Cat {
    command(command: CommandInterface) {
        command.handle()
    }
}