import { Float, Query, Resolver, Int } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Hola Mundo es lo que retorna',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  //randomFromZeroTo
  @Query(() => Int, { name: 'randomFromZeroTo' })
  getRandomFromZeroTo() {
    return Math.floor(Math.random() * 10);
  }
}
