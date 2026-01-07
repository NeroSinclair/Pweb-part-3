<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "config.php";

$method = $_SERVER['REQUEST_METHOD'];

if ($method === "GET") {
    $stmt = $pdo->query("SELECT * FROM mahasiswa");
    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $stmt = $pdo->prepare(
        "INSERT INTO mahasiswa (nama, npm, kelas)
         VALUES (?, ?, ?)"
    );
    $stmt->execute([
        $data['nama'],
        $data['npm'],
        $data['kelas']
    ]);

    echo json_encode(["message" => "Data berhasil ditambahkan"]);
    exit;
}