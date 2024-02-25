import path from 'path';

export function getBaseSourcePath(userPath, baseDir = 'src') {
    const normalizedPath = path.normalize(userPath).replace(/^(\.\.[/\\])+/, '');
    return normalizedPath.startsWith(baseDir) ? normalizedPath : path.join(baseDir, normalizedPath);
}