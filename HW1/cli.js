require('yargs')
  .usage('$0 <cmd> [args]')
  .command('area [type]', "calc area", (yargs) => 
  {
    yargs.positional('type', {
      type: 'string',
      default: 'rect',
      describe: 'The type of shape to calculate area.'
    })
    .option("w", {
      describe: "The width of the area.",
      type: "number"
    })
    .option("h", {
      describe: "The height of the area.",
      type: "number"
    })
    .option("v", {
      describe: "Print the details"
    })
  }, function (argv) { calc(argv) } )
  .help()
  .argv

function calc(argv) {
  // Unpack into variables
  let {w,h,r,v,type} = argv;

  
  if( type == "rect") {
    if(v == true){
      console.log(`Width: ${w}`);
      console.log(`Height: ${h}`);
    }
    console.log( `Area: ${w * h}`);
  }
  if( type == "circle") {
    if(v == true){
      console.log(`radius: ${r}`);
    }
    console.log( `Area: ${3.14 * r *r}`);
  }
}
