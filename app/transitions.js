let duration = 300;

export default function() {
  this.setDefault({ duration });

  this.transition(
    this.fromRoute('index'),
    this.toRoute('people'),
    this.use('to-left'),
    this.reverse('to-right')
  );

  this.transition(
    this.fromRoute('people.index'),
    this.toRoute(function(routeName) { return routeName !== 'index' && routeName !== 'people.index'; }),
    this.useAndReverse('explode', {
      matchBy: 'src',
      use: 'fly-to'
    },{
      pickNew: '.person-info',
      use: 'to-left'
    },{
      pickOld: '.person-info',
      use: 'to-right'
    },{
      use: 'cross-fade'
    })
  );
}
