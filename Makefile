# Install packages
install:
	cd ./reviuuer/backend && npm install
	cd ./reviuuer && npm install
	
# Run server
server:
	cd ./reviuuer/backend && nodemon

# Run client
client:
	cd ./reviuuer && npm start
