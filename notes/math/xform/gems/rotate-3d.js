gems=(new Set());
gems.count=()=> { alert( gems.size ); };
gems.list=()=>(arr(gems));
gems.item=(n)=>((gems.list())[n]);
gems.add( "gems.count()" );
gems.add( "gems.list()"  );
gems.add( "gems.item(0)" );
