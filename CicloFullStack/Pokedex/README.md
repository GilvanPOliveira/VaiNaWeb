instalado

npm install recharts

estilo para o recharts:
 <RadarChart
       outerRadius={90}
       data={pokemon.stats.map((s) => ({
         stat: statMap[s.stat.name],
         value: s.base_stat,
       }))}
     >
       <PolarGrid />
       <PolarAngleAxis dataKey="stat" />
       <PolarRadiusAxis angle={30} domain={[0, 150]} /> 
       <Radar
         name="Status"
         dataKey="value"
         stroke="#8884d8"
         fill="#8884d8"
         fillOpacity={0.6}
       />
     </RadarChart>

API: https://pokeapi.co/api/v2/
