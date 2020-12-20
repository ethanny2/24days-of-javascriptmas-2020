const {domainType} = require('../main')


describe('domainType()', () => {
  it('returns list of domain types', () => {
      // arrange
      const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
      
      // act
      const result = domainType(domains);

      // log
      console.log(`Day 20 result :  domainType([${domains}]) = `, result);
      
      // assert
      expect(result).toEqual(["organization", "commercial", "network", "information"]);
  });
});