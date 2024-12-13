export function formatResponse(content) {
    return content.replace(/^["']+|["']+$/g, '');
}