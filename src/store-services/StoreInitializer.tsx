export class StoreInitializer {
  public static initialize(...initializerObjects: IStoreInitializer[]) {
    if (!initializerObjects || !initializerObjects.length) {
      return;
    }
    initializerObjects.forEach(object => object.initialize());
  }
}
