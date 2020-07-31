FROM python:3.8.5-slim-buster AS python-base
ENV POETRY_VERSION="1.0.10" \
    POETRY_HOME="/opt/poetry" \
    POETRY_VIRTUALENVS_IN_PROJECT=true \
    POETRY_NO_INTERACTION=1 \
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/pysetup/.venv" \
    APP_PATH="/app"
ENV PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH"


FROM python-base AS builder
RUN apt update -y && \
    apt install --no-install-recommends -y \
        curl \
        build-essential
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python
WORKDIR $PYSETUP_PATH
COPY poetry.lock pyproject.toml ./
RUN poetry install --no-dev


FROM python-base AS development
ENV ENVIRONMENT=development
WORKDIR $PYSETUP_PATH
COPY --from=builder $POETRY_HOME $POETRY_HOME
COPY --from=builder $PYSETUP_PATH $PYSETUP_PATH
RUN poetry install
WORKDIR $APP_PATH
EXPOSE 5000
CMD ["python", "-m", "mezon"]


FROM python-base AS production
COPY --from=builder $PYSETUP_PATH $PYSETUP_PATH
COPY . $APP_PATH
WORKDIR $APP_PATH
CMD ["gunicorn", "-b", "0.0.0.0:5000", "mezon:create_app()"]
