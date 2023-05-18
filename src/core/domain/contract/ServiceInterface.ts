/*
 * This interface will ensure that our service classes only implments process() method
 * This will help to separate the concerns between classes
 */

export default interface ServiceInterface {
  process(): {} | void
}
