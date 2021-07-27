import { UniqueServiceId } from './unique-id.service';
describe(UniqueServiceId.name, () =>{
    it(`#${UniqueServiceId.prototype.generateUniqueIdWithprefix.name}generate id when called with prefix`, () =>{
        const service = new UniqueServiceId();
        const id = service.generateUniqueIdWithprefix('app');
        expect(id.startsWith('app-')).toBeTrue();

    });
    it(`#${UniqueServiceId.prototype.generateUniqueIdWithprefix.name}should not generate duplicate IDs when called multiple times`, () =>{
        const service = new UniqueServiceId();
        const ids = new Set();
        for(let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdWithprefix('app'));

        }
        expect(ids.size).toBe(50);

    });
});
