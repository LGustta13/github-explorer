type RepositoryItemProps = {
    repository: {
        name: string
        description: string
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <div>
                <strong>{props.repository.name}</strong>
                <p>{props.repository.description}</p>
            </div>
            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>

    );
}