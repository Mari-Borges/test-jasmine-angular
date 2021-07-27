import { UniqueServiceId } from './unique-id.service';
describe(UniqueServiceId.name, () =>{
    it(`#${UniqueServiceId.prototype.generateUniqueIdWithprefix.name}generate id when called with prefix`, () =>{
        const service = new UniqueServiceId();
        const id = service.generateUniqueIdWithprefix('app');
        expect(id.startsWith('app-')).toBeTrue();

    });
    it(`#${UniqueServiceId.prototype.generateUniqueIdWithprefix.name}should not generate duplicate IDs when called multiple times`, () =>{
        const service = new UniqueServiceId();
        const firstId = service.generateUniqueIdWithprefix('app');
        const secondId = service.generateUniqueIdWithprefix('app')
        expect(firstId).not.toBe(secondId)

    });
});
