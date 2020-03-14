all: install run

install:
	@pipenv install
	@cd frontend && yarn

run-backend:
	@cd backend && pipenv run flask run --port 8000

run-frontend:
	@cd frontend && yarn start

run:
	@make run-backend & make run-frontend

.PHONY: all install run-backend run-frontend run
