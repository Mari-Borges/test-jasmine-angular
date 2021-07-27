import { UniqueServiceId } from './unique-id.service';
describe(UniqueServiceId.name, () =>{
    it(`#${UniqueServiceId.prototype.generateUniqueIdWithprefix.name}generate id when called with prefix`, () =>{
        const service = new UniqueServiceId();
        const id = service.generateUniqueIdWithprefix('app');
        expect(id.startsWith('app-')).toBeTrue();

    });
});
