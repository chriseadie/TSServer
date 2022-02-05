import SingletonService from "../SingletonService";

interface Injection {
    index: number;
    key: string;
  }

export function Injectable(){
    return function Injectable <T extends { new (...args: any[]): {} }>(constructor: T): T | void {
        return class extends constructor{
            constructor(...args:any[]){
                const injections = (constructor as any).injections as Array<Injection>;
                const injectedArgs: any[] = injections.map(({key}) => {
                    return SingletonService.Get(key)
                  })
                super(...injectedArgs);
            }
        }
    }
}

export function Inject(key: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
      const injection: Injection = { index: parameterIndex, key }
      const existingInjections: Injection[] = (target as any).injections || []
      Object.defineProperty(target, "injections", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: [...existingInjections, injection]
      })
    }
  }