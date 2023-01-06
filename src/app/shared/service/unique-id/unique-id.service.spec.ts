import {UniqueIdService} from './unique-id.service';

const service = new UniqueIdService();

describe(UniqueIdService.name, () => { // não passar o nome da classe como string
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue(); // dando mais precisão no prefixo app
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should not generated duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++){
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});

// jasmine escreve teste
// karma executa e roda o comando jasmine
