import {UniqueIdService} from './unique-id.service';

describe(UniqueIdService.name, () => { // não passar o nome da classe como string
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});

// jasmine escreve teste
// karma executa e roda o comando jasmine
